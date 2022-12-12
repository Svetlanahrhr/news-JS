import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1856072560504030aea6765f60857141', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
