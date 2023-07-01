import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drug')
export class Drug {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  barcode: string;

  @Column({ type: 'varchar', length: 255 })
  manufacturer: string;

  @Column({ type: 'varchar', length: 255 })
  category: string;

  @Column({ type: 'text', nullable: true, name: 'side_effects' })
  sideEffects: string;

  @Column({ type: 'text', nullable: true })
  indications: string;

  @Column({ type: 'text', nullable: true })
  contraindications: string;

  @Column({ type: 'varchar', length: 255 })
  dosage: string;

  @Column({ type: 'varchar', length: 255, name: 'regulatory_status' })
  regulatoryStatus: string;
}