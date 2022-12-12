import AppController from '../controller/controller';
import { IData, ISources } from '../interfaces/interfaces';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) => this.controller.getNews(e, (data?: IData) => this.view.drawNews(data)));
        this.controller.getSources((data?: ISources) => this.view.drawSources(data));
    }
}

export default App;
