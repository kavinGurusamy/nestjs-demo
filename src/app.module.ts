import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryModule } from './task-manager-api/category/category.module';
import { BaseCrudService } from './shared/service/curd-base.service';
import { TagModule } from './task-manager-api/tag/tag.module';
import { TaskModule } from './task-manager-api/task/task.module';
import { UserModule } from './task-manager-api/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/database_config/type-orm-config.service';
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
