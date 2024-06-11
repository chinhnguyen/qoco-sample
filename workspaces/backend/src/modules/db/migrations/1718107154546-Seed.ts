import { MigrationInterface, QueryRunner } from 'typeorm';

import * as seeds from './flights.json';
import { Flight } from 'src/modules/flights/flight.entity';

export class Seed1718107154546 implements MigrationInterface {
  name = 'Seed1718107154546';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const flights = seeds as unknown as Flight[];
    for (const flight of flights) {
      await queryRunner.query(
        `INSERT INTO "flights" (
          "id", 
          "airline", 
          "registration", 
          "aircraftType", 
          "flightNum", 
          "schedDepTime",
          "schedArrTime",
          "actualDepTime",
          "actualArrTime",
          "estimatedDepTime",
          "estimatedArrTime",
          "schedDepStation",
          "schedArrStation",
          "depStand",
          "origDepStand",
          "arrStand",
          "origArrStand"
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
        [
          flight.flightId,
          flight.airline,
          flight.registration,
          flight.aircraftType,
          flight.flightNum,
          flight.schedDepTime,
          flight.schedArrTime,
          flight.actualDepTime,
          flight.actualArrTime,
          flight.estimatedDepTime,
          flight.estimatedArrTime,
          flight.schedDepStation,
          flight.schedArrStation,
          flight.depStand,
          flight.origDepStand,
          flight.arrStand,
          flight.origArrStand
        ]
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const flights = seeds as unknown as Flight[];
    for (const flight of flights) {
      await queryRunner.query(`DELETE FROM "flights" WHERE "id" = $1`, [
        flight.flightId
      ]);
    }
  }
}
