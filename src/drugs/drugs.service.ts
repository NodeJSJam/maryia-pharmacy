import { Injectable } from '@nestjs/common';
import { IDrug } from 'src/types/drugs';

@Injectable()
export class DrugsService {
  private readonly drugs: IDrug[];

  constructor() {
    this.drugs = [
      {
        barcode: '001',
        name: 'TestDrug1',
      },
      {
        barcode: '002',
        name: 'TestDrug2',
      },
    ];
  }

  getDrugs(): IDrug[] {
    return this.drugs;
  }

  getDrugByBarcode(barcode: string): IDrug | null {
    return this.drugs.find(drug => drug.barcode === barcode) || null;
  }
}
