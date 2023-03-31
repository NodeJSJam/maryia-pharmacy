import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService } from './api/api.configuration.service';
import configuration from './app/app.configuration';
import apiConfiguration from './api/api.configuration';
import { AppConfigService } from './app/api.configuration.service';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration, apiConfiguration], isGlobal: true })],
  controllers: [],
  providers: [ApiConfigService, AppConfigService],
})

export class GlobalConfigurationModule {}
