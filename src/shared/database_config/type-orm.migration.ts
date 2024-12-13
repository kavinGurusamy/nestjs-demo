import { DataSource } from 'typeorm';
import { getConfig } from './config';

export const typeOrmConfiguration: DataSource = new DataSource(getConfig());

typeOrmConfiguration
  .initialize()
  .then(() => {
    console.log('Data source initilized');
  })
  .catch((err) => {
    console.log('Error DB');
  });
