import { Module } from '@nestjs/common';
import { DrugsController } from './drugs.controller';
import { DrugsService } from './drugs.service';

@Module({
  imports: [],
  controllers: [DrugsController],
  providers: [DrugsService],
})
export class DrugModule {}
