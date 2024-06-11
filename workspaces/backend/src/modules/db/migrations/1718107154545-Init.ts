import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1718107154545 implements MigrationInterface {
  name = 'Init1718107154545';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "flights" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "airline" character varying NOT NULL, "registration" character varying NOT NULL, "aircraftType" character varying NOT NULL, "flightNum" character varying NOT NULL, "schedDepTime" TIMESTAMP, "schedArrTime" TIMESTAMP, "actualDepTime" TIMESTAMP, "actualArrTime" TIMESTAMP, "estimatedDepTime" TIMESTAMP, "estimatedArrTime" TIMESTAMP, "schedDepStation" character varying, "schedArrStation" character varying, "depStand" character varying, "origDepStand" character varying, "arrStand" character varying, "origArrStand" character varying, CONSTRAINT "PK_c614ef3382fdd70b6d6c2c8d8dd" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "flights"`);
  }
}
