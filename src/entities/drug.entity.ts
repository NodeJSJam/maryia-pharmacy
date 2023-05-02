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

  @Column({ type: 'simple-array', array: true, name: 'side_effects' })
  sideEffects: string[];

  @Column({ type: 'simple-array', array: true })
  indications: string[];

  @Column({ type: 'simple-array', array: true })
  contraindications: string[];

  @Column({ type: 'varchar', length: 255 })
  dosage: string;

  @Column({ type: 'varchar', length: 255, name: 'regulatory_status' })
  regulatoryStatus: string;

  @Column({ type: 'json' })
  cost: {
    amount: number;
    currency: string;
    discounts: {
      name: string;
      amount: number;
    }[];
  };
}