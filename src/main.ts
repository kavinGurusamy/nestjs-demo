import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

//24hrs, caching the prelight request in browser
const MAX_AGE_CORS = 86400;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({ maxAge: MAX_AGE_CORS }));

  await app.listen(3000);
}
bootstrap();
