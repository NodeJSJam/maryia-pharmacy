import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrugPharmacy } from 'src/entities/drug_pharmacy.entity';
import { DrugsPharmaciesController } from './drugs_pharmacies.controller';
import { DrugsPharmaciesService } from './drugs_pharmacies.service';

@Module({
  imports: [TypeOrmModule.forFeature([DrugPharmacy])],
  controllers: [DrugsPharmaciesController],
  providers: [DrugsPharmaciesService],
})
export class DrugPharmacyModule {}
