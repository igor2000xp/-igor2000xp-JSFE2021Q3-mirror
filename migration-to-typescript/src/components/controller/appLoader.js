import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1b18e3d30f3a4a898f7c37fb3a806419', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
