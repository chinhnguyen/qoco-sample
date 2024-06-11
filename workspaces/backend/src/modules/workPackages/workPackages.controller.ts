import { Controller, Get, Query } from '@nestjs/common';
import { WorkPackagesService } from './workPackages.service';

@Controller({
  path: '/work-packages',
  version: '1'
})
export class WorkPackagesController {
  constructor(private readonly workPackagesService: WorkPackagesService) {}

  @Get()
  getWorkPackages(@Query() options: { skip?: number; take?: number }) {
    return this.workPackagesService.find(options);
  }
}
