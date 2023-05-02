import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostgresConfigService {
  constructor(private configService: ConfigService) {}

  get user(): string {
    return this.configService.get('postgres.user') || '';
  }

  get password(): string {
    return this.configService.get('postgres.password') || '';
  }

  get database(): string {
    return this.configService.get('postgres.user') || '';
  }

  get host(): string {
    return this.configService.get('postgres.host') || 'localhost';
  }

  get port(): number {
    return +this.configService.get('postgres.port') || 5432;
  }
}
