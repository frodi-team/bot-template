import 'reflect-metadata';
import { Service } from 'typedi';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

@Service()
export class ConfigService {
  get(name: string): string {
    return process.env[name];
  }

  getNumber(name: string): number {
    return Number(process.env[name]);
  }

  getBoolean(name: string): boolean {
    return Boolean(process.env[name]);
  }

  getJson<T>(name: string): T {
    return JSON.parse(process.env[name]);
  }
}
