import { Repository } from 'typeorm';
import { WorkPackage } from './workPackage.entity';
import { WorkPackagesService } from './workPackages.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('WorkPackagesService', () => {
  let service: WorkPackagesService;
  let repository: Repository<WorkPackage>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkPackagesService,
        {
          provide: getRepositoryToken(WorkPackage),
          useClass: Repository
        }
      ]
    }).compile();

    service = module.get<WorkPackagesService>(WorkPackagesService);
    repository = module.get<Repository<WorkPackage>>(
      getRepositoryToken(WorkPackage)
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find', () => {
    it('should return an array of flights', async () => {
      const flights = [new WorkPackage(), new WorkPackage()];
      const count = flights.length;

      jest
        .spyOn(repository, 'findAndCount')
        .mockResolvedValueOnce([flights, count]);

      const result = await service.find({});

      expect(result.data).toEqual(flights);
      expect(result.count).toEqual(count);
    });

    it("should use the default values if options aren't provided", async () => {
      const flights = [new WorkPackage(), new WorkPackage()];
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
