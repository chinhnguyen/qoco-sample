import { Repository } from 'typeorm';
import { Flight } from './flight.entity';
import { FlightsService } from './flights.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('FlightsService', () => {
  let service: FlightsService;
  let repository: Repository<Flight>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FlightsService,
        {
          provide: getRepositoryToken(Flight),
          useClass: Repository
        }
      ]
    }).compile();

    service = module.get<FlightsService>(FlightsService);
    repository = module.get<Repository<Flight>>(getRepositoryToken(Flight));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find', () => {
    it('should return an array of flights', async () => {
      const flights = [new Flight(), new Flight()];
      const count = flights.length;

      jest
        .spyOn(repository, 'findAndCount')
        .mockResolvedValueOnce([flights, count]);

      const result = await service.find({});

      expect(result.data).toEqual(flights);
      expect(result.count).toEqual(count);
    });

    it("should use the default values if options aren't provided", async () => {
      const flights = [new Flight(), new Flight()];
      const count = flights.length;

      const sypFindAndCount = jest
        .spyOn(repository, 'findAndCount')
        .mockResolvedValueOnce([flights, count]);

      await service.find({});

      expect(sypFindAndCount).toHaveBeenCalledWith({
        take: 10,
        skip: 0
      });
    });
  });
});
