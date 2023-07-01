import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DrugPharmacy } from 'src/entities/drug_pharmacy.entity';

@Injectable()
export class DrugsPharmaciesService {
  constructor(
    @InjectRepository(DrugPharmacy)
    private drugsPharmaciesRepository: Repository<DrugPharmacy>,
  ) { }

  getDrugsPharmacies(): Promise<DrugPharmacy[]> {
    return this.drugsPharmaciesRepository.find();
  }
}
