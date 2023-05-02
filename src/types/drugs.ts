export interface IDrug {
  id: number;
  name: string;
  barcode: string;
  manufacturer: string;
  category: string;
  sideEffects: string[];
  indications: string[];
  contraindications: string[];
  dosage: string;
  regulatoryStatus: string;

  cost: {
    amount: number;
    currency: string;
    discounts: {
      name: string;
      amount: number;
    }[];
  };
}