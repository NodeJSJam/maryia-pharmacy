import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiConfigService } from './configuration/api/api.configuration.service';
import { AppConfigService } from './configuration/app/api.configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(AppConfigService).port;
  const testMessage = app.get(ApiConfigService).test;

  console.log('===> port', port);
  console.log('===> testMessage', testMessage);

  await app.listen(port);
}
bootstrap();
