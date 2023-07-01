import { Module } from '@nestjs/common';
import { DrugModule } from './modules/drugs/drugs.module';
import { GlobalConfigurationModule } from './configuration/configuration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './configuration/postgres/postgres.configuration.service';
import { PharmacyModule } from './modules/pharmacies/pharmacies.module';
import { DrugPharmacyModule } from './modules/drugs_pharmacies/drugs_pharmacies.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [GlobalConfigurationModule],
      useFactory: async (configService: PostgresConfigService) => ({
        type: 'postgres',
        host: configService.host,
        port: configService.port,
        username: configService.user,
        password: configService.password,
        database: configService.database,
        autoLoadEntities: true,
        synchronize: true, // TODO: disable in prod, it will drop the database
      }),
      inject: [PostgresConfigService],
    }), 
    DrugModule,
    PharmacyModule,
    DrugPharmacyModule,
    GlobalConfigurationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
