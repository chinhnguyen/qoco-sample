import { Controller, Get, Query } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller({
  path: '/flights',
  version: '1'
})
export class FlightsController {
  constructor(private readonly flightsService: FlightService) {}

  @Get()
  getFlights(@Query() options: { skip?: number; take?: number }) {
    return this.flightsService.find(options);
  }
}
