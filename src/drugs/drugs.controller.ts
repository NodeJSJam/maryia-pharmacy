import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { IDrug } from 'src/types/drugs';
import { DrugsService } from './drugs.service';

@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugService: DrugsService) {}

  @Get()
  getDrugs(): IDrug[] {
    return this.drugService.getDrugs();
  }

  @Get(':barcode')
  getDrugByBarcode(
    @Param('barcode') barcode: string,
  ): IDrug {
    const drug = this.drugService.getDrugByBarcode(barcode);
    if (!drug) throw new NotFoundException('Drug is not found by barcode');

    return drug;
  }
}
