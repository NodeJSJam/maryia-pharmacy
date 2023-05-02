import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './configuration/app/api.configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(AppConfigService).port;

  await app.listen(port);
}
bootstrap();
