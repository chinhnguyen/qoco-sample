import { Controller, Get, Query } from '@nestjs/common';
import { FlightsService } from './flights.service';

@Controller({
  path: '/flights',
  version: '1'
})
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  getFlights(@Query() options: { skip?: number; take?: number }) {
    return this.flightsService.find(options);
  }
}
