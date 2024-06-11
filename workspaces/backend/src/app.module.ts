import { Module } from '@nestjs/common';
import { FlightsModule } from './modules/flights/flights.module';
import { DbModule } from './modules/db/db.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DbModule, FlightsModule]
})
export class AppModule {}
