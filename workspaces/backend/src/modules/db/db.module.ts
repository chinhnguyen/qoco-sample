import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

console.log(__dirname + '/migrations/*{.ts,.js}');

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        migrationsRun: true
      })
    })
  ]
})
export class DbModule {}
