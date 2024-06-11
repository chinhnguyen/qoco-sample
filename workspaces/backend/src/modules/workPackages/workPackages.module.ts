import { Module } from '@nestjs/common';
import { WorkPackagesController } from './workPackages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkPackage } from './workPackage.entity';
import { WorkPackagesService } from './workPackages.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorkPackage])],
  controllers: [WorkPackagesController],
  providers: [WorkPackagesService]
})
export class WorkPackagesModule {}
