import { Service } from 'typedi';

@Service()
export class Core {
  public readonly start = () => {
    console.log('Bot started');
  };
}
