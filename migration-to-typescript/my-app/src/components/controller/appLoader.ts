import { Loader } from './loader';

export class AppLoader extends Loader {
  constructor() {
    // super('https://newsapi.org/v2/', {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '1b18e3d30f3a4a898f7c37fb3a806419', // получите свой ключ https://newsapi.org/
    });
  }
}

// export default AppLoader;
