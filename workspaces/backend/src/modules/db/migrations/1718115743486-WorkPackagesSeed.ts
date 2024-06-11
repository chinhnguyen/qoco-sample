import { MigrationInterface, QueryRunner } from 'typeorm';

import * as seeds from './workPackages.json';
import { WorkPackage } from 'src/modules/workPackages/workPackage.entity';

export class WorkPackagesSeed1718115743486 implements MigrationInterface {
  name = 'WorkPackagesSeed1718115743486';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const workPackages = seeds as unknown as WorkPackage[];
    for (const wp of workPackages) {
      await queryRunner.query(
        `INSERT INTO "workPackages" (
          "id", 
          "name", 
          "station", 
          "status", 
          "area", 
          "registration",
          "startDateTime",
          "endDateTime"
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          wp.workPackageId,
          wp.name,
          wp.station,
          wp.status,
          wp.area,
          wp.registration,
          wp.startDateTime,
          wp.endDateTime
        ]
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const workPackages = seeds as unknown as WorkPackage[];
    for (const wp of workPackages) {
      await queryRunner.query(`DELETE FROM "flights" WHERE "id" = $1`, [
        wp.workPackageId
      ]);
    }
  }
}
