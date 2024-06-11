import { Controller, Get } from '@nestjs/common';

@Controller({
  path: '/flights',
  version: '1'
})
export class FlightsController {
  constructor() {}

  @Get()
  getFlights() {
    return 'All flights';
  }
}
