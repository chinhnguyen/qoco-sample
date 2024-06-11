import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('flights')
export class Flight {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  flightId: number;

  @Column()
  airline: string;

  @Column()
  registration: string;

  @Column()
  aircraftType: string;

  @Column()
  flightNum: string;

  @Column({ nullable: true })
  schedDepTime?: Date;

  @Column({ nullable: true })
  schedArrTime?: Date;

  @Column({ nullable: true })
  actualDepTime?: Date;

  @Column({ nullable: true })
  actualArrTime?: Date;

  @Column({ nullable: true })
  estimatedDepTime?: Date;

  @Column({ nullable: true })
  estimatedArrTime?: Date;

  @Column({ nullable: true })
  schedDepStation?: string;

  @Column({ nullable: true })
  schedArrStation?: string;

  @Column({ nullable: true })
  depStand?: string;

  @Column({ nullable: true })
  origDepStand?: string;

  @Column({ nullable: true })
  arrStand?: string;

  @Column({ nullable: true })
  origArrStand?: string;
}
