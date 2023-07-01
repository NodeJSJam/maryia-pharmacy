import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pharmacy')
export class Pharmacy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  location: string;

  @Column({ type: 'varchar', length: 255 })
  website: string;

  @Column({ type: 'varchar', length: 255, name: 'working_hours' })
  workingHours: string;

  @Column({ type: 'varchar', length: 20, name: 'phone_number' })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;
}