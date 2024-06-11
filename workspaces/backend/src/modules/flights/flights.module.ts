import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  controllers: [FlightsController],
  providers: []
})
export class FlightsModule {}
