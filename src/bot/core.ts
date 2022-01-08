import { Service } from 'typedi';

@Service()
export class Core {
  readonly start = () => {
    console.log('Bot started');
  };
}
