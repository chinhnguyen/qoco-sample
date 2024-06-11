import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config(); // Load .env file

const configService = new ConfigService();
const dsOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}']
} as DataSourceOptions;
console.log(dsOptions);

export default new DataSource(dsOptions);
