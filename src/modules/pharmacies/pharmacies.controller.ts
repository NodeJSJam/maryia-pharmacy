import { Controller, Get } from '@nestjs/common';
import { Pharmacy } from 'src/entities/pharmacy.entity';
import { PharmaciesService } from './pharmacies.service';

@Controller('pharmacies')
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @Get()
  getPharmacies(): Promise<Pharmacy[]> {
    return this.pharmaciesService.getPharmacies();
  }
}
