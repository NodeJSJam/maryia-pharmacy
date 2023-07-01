import { Controller, Get } from '@nestjs/common';
import { DrugsPharmaciesService } from './drugs_pharmacies.service';
import { DrugPharmacy } from 'src/entities/drug_pharmacy.entity';

@Controller('drugs_pharmacies')
export class DrugsPharmaciesController {
  constructor(private readonly drugsPharmaciesService: DrugsPharmaciesService) {}

  @Get()
  getDrugsPharmacies(): Promise<DrugPharmacy[]> {
    return this.drugsPharmaciesService.getDrugsPharmacies();
  }
}
