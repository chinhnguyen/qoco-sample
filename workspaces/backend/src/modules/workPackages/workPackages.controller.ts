import { Controller, Get, Query } from '@nestjs/common';
import { WorkPackagesService } from './workPackages.service';
import {
  GetWorkPackagesOptions,
  GetWorkPackagesResponse,
  WorkPackage
} from '@qoco-sample/shared';

@Controller({
  path: '/work-packages',
  version: '1'
})
export class WorkPackagesController {
  constructor(private readonly workPackagesService: WorkPackagesService) {}

  @Get()
  async getWorkPackages(
    @Query() options: GetWorkPackagesOptions
  ): Promise<GetWorkPackagesResponse> {
    const res = await this.workPackagesService.find(options);
    return {
      data: res.data.map(
        (wp) =>
          ({
            ...wp,
            startDateTime: wp.startDateTime.toISOString(),
            endDateTime: wp.endDateTime.toISOString()
          }) as WorkPackage
      ),
      count: res.count
    };
  }
}
