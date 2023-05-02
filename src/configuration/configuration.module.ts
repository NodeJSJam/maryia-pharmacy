import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './app/app.configuration';
import { AppConfigService } from './app/api.configuration.service';
import postgresConfiguration from './postgres/postgres.configuration';
import { PostgresConfigService } from './postgres/postgres.configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration, postgresConfiguration],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [AppConfigService, PostgresConfigService],
  exports: [PostgresConfigService],
})

export class GlobalConfigurationModule {}
