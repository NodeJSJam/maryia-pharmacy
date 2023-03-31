import { Module } from '@nestjs/common';
import { DrugModule } from './drugs/drugs.module';

@Module({
  imports: [DrugModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
