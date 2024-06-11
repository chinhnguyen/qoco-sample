import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './flight.entity';
import { FlightsService } from './flights.service';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  controllers: [FlightsController],
  providers: [FlightsService]
})
export class FlightsModule {}
