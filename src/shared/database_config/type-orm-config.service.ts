import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  async createTypeOrmOptions(
    connectionName?: string,
  ): Promise<TypeOrmModuleOptions> {
    return {
      type: 'oracle',
      thickMode: true,
      host: this.configService.get('DBHOST'),
      port: this.configService.get('DBPORT'),
      username: this.configService.get('DBUSERNAME'),
      password: this.configService.get('DBPASSWORD'),
      serviceName: this.configService.get('DBSERVICE'),
      entities: [__dirname + '/../../task-manager-api/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
      // logging: 'all'
    };
  }
}
