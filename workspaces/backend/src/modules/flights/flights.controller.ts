import { Controller, Get, Query } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { GetFlightsOptions, GetFlightsResponse } from '@qoco-sample/shared';

@Controller({
  path: '/flights',
  version: '1'
})
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  getFlights(@Query() options: GetFlightsOptions): Promise<GetFlightsResponse> {
    return this.flightsService.find(options);
  }
}
