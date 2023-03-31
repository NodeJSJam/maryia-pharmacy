import { Module } from '@nestjs/common';
import { DrugModule } from './drugs/drugs.module';
import { GlobalConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [DrugModule, GlobalConfigurationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
