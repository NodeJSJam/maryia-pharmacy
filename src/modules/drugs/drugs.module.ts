import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drug } from 'src/entities/drug.entity';
import { DrugsController } from './drugs.controller';
import { DrugsService } from './drugs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Drug])],
  controllers: [DrugsController],
  providers: [DrugsService],
})
export class DrugModule {}
