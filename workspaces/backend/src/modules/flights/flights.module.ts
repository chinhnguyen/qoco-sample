import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';

@Module({
  imports: [],
  controllers: [FlightsController],
  providers: []
})
export class FlightsModule {}
