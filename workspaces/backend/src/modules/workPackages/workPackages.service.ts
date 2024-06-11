import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WorkPackage } from './workPackage.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WorkPackagesService {
  constructor(
    @InjectRepository(WorkPackage)
    private readonly workPackageRepository: Repository<WorkPackage>
  ) {}

  async find(options: {
    skip?: number;
    take?: number;
  }): Promise<{ data: WorkPackage[]; count: number }> {
    const take = options.take || 10;
    const skip = options.skip || 0;
    const [data, count] = await this.workPackageRepository.findAndCount({
      take,
      skip
    });
    return { data, count };
  }
}
