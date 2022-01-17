import { Loader } from './loader';
const url = 'https://nodenews.herokuapp.com/';
// получите свой ключ https://newsapi.org/
const myApiKey = '1b18e3d30f3a4a898f7c37fb3a806419';

export class AppLoader extends Loader {
  public constructor() {
    super(url, {
      apiKey: myApiKey,
    });
  }
}
