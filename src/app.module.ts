import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './shared/database_config/type-orm-config.service';
import { BaseCrudService } from './shared/service/curd-base.service';
import { CategoryModule } from './task-manager-api/category/category.module';
import { TagModule } from './task-manager-api/tag/tag.module';
import { TaskModule } from './task-manager-api/task/task.module';
import { UserModule } from './task-manager-api/user/user.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CategoryResolver } from './graphql/resolver/category.resolver';
import { CategoryGraphQLModule } from './graphql/category-graphql/category-graphql.module';

const envpath = process.env.customEnvFile
  ? process.env.CustomEnvFile.trim()
  : '.env';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: envpath }),
    CategoryModule,
    TagModule,
    TaskModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Auto-generate schema
    }),
    CategoryGraphQLModule,
  ],
  controllers: [AppController],
  providers: [AppService, BaseCrudService],
})
export class AppModule {}
