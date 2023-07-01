import { Controller, Get } from '@nestjs/common';
import { Drug } from 'src/entities/drug.entity';
import { DrugsService } from './drugs.service';

@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugService: DrugsService) {}

  @Get()
  getDrugs(): Promise<Drug[]> {
    return this.drugService.getDrugs();
  }
}
