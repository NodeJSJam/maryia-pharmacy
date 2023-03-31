import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get test(): string {
    return this.configService.get('api.test') || 'Hello!';
  }
}
