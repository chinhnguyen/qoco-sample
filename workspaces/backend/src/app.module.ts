import { Module } from '@nestjs/common';
import { FlightsModule } from './modules/flights/flights.module';
import { DbModule } from './modules/db/db.module';
import { ConfigModule } from '@nestjs/config';
import { WorkPackagesModule } from './modules/workPackages/workPackages.module';

@Module({
  imports: [ConfigModule.forRoot(), DbModule, FlightsModule, WorkPackagesModule]
})
export class AppModule {}
