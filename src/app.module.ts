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
  ],
  controllers: [AppController],
  providers: [AppService, BaseCrudService],
})
export class AppModule {}
