import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { CategoryModule } from './task-manager-api/category/category.module';
import { BaseCrudService } from './shared/curd-base.service';
import { TagModule } from './task-manager-api/tag/tag.module';
import { TaskModule } from './task-manager-api/task/task.module';
import { UserModule } from './task-manager-api/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule, CategoryModule, TagModule, TaskModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ConfigService, BaseCrudService],
})
export class AppModule {}
