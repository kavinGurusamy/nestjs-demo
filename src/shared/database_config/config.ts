import { DataSource, DataSourceOptions } from 'typeorm';

export function getConfig() {
  const config = {
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
  } as DataSourceOptions;

  return config;
}
