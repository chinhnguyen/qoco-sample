import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightsRepository: Repository<Flight>
  ) {}

  async find(options: {
    skip?: number;
    take?: number;
  }): Promise<{ data: Flight[]; count: number }> {
    const take = options.take || 10;
    const skip = options.skip || 0;
    const [data, count] = await this.flightsRepository.findAndCount({
      take,
      skip
    });
    return { data, count };
  }
}
