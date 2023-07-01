import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pharmacy } from 'src/entities/pharmacy.entity';

@Injectable()
export class PharmaciesService {
  constructor(
    @InjectRepository(Pharmacy)
    private pharmaciesRepository: Repository<Pharmacy>,
  ) { }

  getPharmacies(): Promise<Pharmacy[]> {
    return this.pharmaciesRepository.find();
  }
}
