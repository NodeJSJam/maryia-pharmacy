import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Drug } from 'src/entities/drug.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DrugsService {
  constructor(
    @InjectRepository(Drug)
    private drugRepository: Repository<Drug>,
  ) { }

  getDrugs(): Promise<Drug[]> {
    return this.drugRepository.find();
  }
}
