import { DataSourceOptions } from 'typeorm';

// to load the .env file
import * as dotenv from 'dotenv';
dotenv.config();

export function getConfig() {
  console.log(process.env.DBUSERNAME, 'process.env.DBUSERNAME');

  const config = {
    type: 'oracle',
    host: process.env.DBHOST,
    port: parseInt(process.env.DBPORT),
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    serviceName: process.env.DBSERVICE,
    entities: [__dirname + '/../../task-manager-api/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  } as DataSourceOptions;

  return config;
}
