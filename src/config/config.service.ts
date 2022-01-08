import 'reflect-metadata';
import { Service } from 'typedi';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

@Service()
export class ConfigService {
  public get(name: string): string {
    return process.env[name];
  }

  public getNumber(name: string): number {
    return Number(process.env[name]);
  }

  public getBoolean(name: string): boolean {
    return Boolean(process.env[name]);
  }

  public getJSON<T>(name: string): T {
    return JSON.parse(process.env[name]);
  }
}
