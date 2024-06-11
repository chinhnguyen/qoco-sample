import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('workPackages')
export class WorkPackage {
  @PrimaryColumn('varchar', { name: 'id' })
  workPackageId: number;

  @Column()
  name: string;

  @Column()
  station: string;

  @Column()
  status: string;

  @Column()
  area: string;

  @Column()
  registration: string;

  @Column()
  startDateTime: Date;

  @Column()
  endDateTime: Date;
}
