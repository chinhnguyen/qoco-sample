import { Controller, Get, Query } from '@nestjs/common';
import { FlightsService } from './flights.service';
import {
  Flight,
  GetFlightsOptions,
  GetFlightsResponse
} from '@qoco-sample/shared';

@Controller({
  path: '/flights',
  version: '1'
})
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  async getFlights(
    @Query() options: GetFlightsOptions
  ): Promise<GetFlightsResponse> {
    const res = await this.flightsService.find(options);

    return {
      data: res.data.map(
        (flight) =>
          ({
            ...flight,
            schedDepTime: flight.schedDepTime?.toISOString(),
            schedArrTime: flight.schedArrTime?.toISOString(),
            actualDepTime: flight.actualDepTime?.toISOString(),
            actualArrTime: flight.actualArrTime?.toISOString(),
            estimatedDepTime: flight.estimatedDepTime?.toISOString(),
            estimatedArrTime: flight.estimatedArrTime?.toISOString()
          }) as Flight
      ),
      count: res.count
    };
  }
}
