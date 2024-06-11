import { MigrationInterface, QueryRunner } from 'typeorm';

export class WorkPackages1718115743485 implements MigrationInterface {
  name = 'WorkPackages1718115743485';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "workPackages" ("id" character varying NOT NULL, "name" character varying NOT NULL, "station" character varying NOT NULL, "status" character varying NOT NULL, "area" character varying NOT NULL, "registration" character varying NOT NULL, "startDateTime" TIMESTAMP NOT NULL, "endDateTime" TIMESTAMP NOT NULL, CONSTRAINT "PK_65e870bd6a27a4472b9d087169f" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "workPackages"`);
  }
}
