import Container, { Token } from 'typedi';
import { ConfigService } from './config.service';

export const BOT_TOKEN = new Token<string>('bot_token');
export const DEV_ID = new Token<number>('dev_id');

const config = Container.get(ConfigService);

Container.set(BOT_TOKEN, config.get('BOT_TOKEN'));
Container.set(DEV_ID, config.getNumber('DEV_ID'));
