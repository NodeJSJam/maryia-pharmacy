import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drug_pharmacy')
export class DrugPharmacy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, name: 'drug_id' })
  drugId: string;

  @Column({ type: 'varchar', length: 255, name: 'pharmacy_id' })
  pharmacyId: string;

  @Column({ type: 'varchar', length: 255 })
  price: string;

  @Column({ type: 'integer' })
  quantity: number;
}