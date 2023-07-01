import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pharmacy } from 'src/entities/pharmacy.entity';
import { PharmaciesController } from './pharmacies.controller';
import { PharmaciesService } from './pharmacies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pharmacy])],
  controllers: [PharmaciesController],
  providers: [PharmaciesService],
})
export class PharmacyModule {}
