import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { json, urlencoded } from 'express';
import { ConfigService } from '@nestjs/config';

import * as cors from 'cors';
import * as morgan from 'morgan';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

//24hrs, caching the prelight request in browser
const MAX_AGE_CORS = 86400;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({ maxAge: MAX_AGE_CORS }));

  // Logging, monitor the traffics
  app.use(
    morgan(function (tokens, req, res) {
      return [tokens.method(req, res), 'reponse-time:' , tokens['response-time'](req,res),'code :',tokens.status(req,res)].join(
        ' ',
      );
    }),
  );

  // setting the prefix
  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI,
  });

  // must install the class-transformer pacakge
  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true,
      skipNullProperties: true,
      skipMissingProperties: true,
      forbidUnknownValues: false,
      transform: true,
      exceptionFactory: (e) => {
        console.error(e);
        throw e;
      },
    }),
  );

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  const config = app.get(ConfigService);
  // console.log(`Database ${config.get('DATABASE')}`)

  //#region Swagger
  // Swagger configuration
  const swaggerOptions = new DocumentBuilder()
    .setTitle('DEMO NESTJS API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app,swaggerOptions,{
    // replacing the term controller in the heading
    operationIdFactory : (controllerKey : string , methodKey : string) => 
      `${methodKey}${controllerKey.replace('Controller','')}`
  })

  for(const swaggerRoute of ['/','/docs','/api/v1','api']){
    SwaggerModule.setup(swaggerRoute,app,swaggerDocument)
  }



  //#endregion

  // usefull when generating open-api-spec in pipelines
  if (process.argv.includes('--buildOpenApiOnly')) {
    app.close();
    return;
  }

  await app.listen(3000);
  console.log(`Server listening on : ${await app.getUrl()} `);
}
bootstrap();
