import { registerAs } from '@nestjs/config';

export default registerAs('api', () => ({
    test: process.env.TEST || 'default test',
}));