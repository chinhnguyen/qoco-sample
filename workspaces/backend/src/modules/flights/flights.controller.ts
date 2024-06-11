import { Controller, Get } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Controller({
  path: '/flights',
  version: '1'
})
export class FlightsController {
  constructor(private readonly entityManager: EntityManager) {}

  @Get()
  getFlights() {
    return 'All flights';
  }
}
