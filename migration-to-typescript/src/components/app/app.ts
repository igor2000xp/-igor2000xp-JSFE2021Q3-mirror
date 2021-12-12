import { AppController } from '../controller/controller';
import { AppView, IValuesDataSources } from '../view/appview';
import { IArtNews, IDataJSON } from '../controller/loader'

interface IDataSources {
  endpoint: string;
  callback: void;
};

export class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) => this.controller.getNews(e, (data): (IDataJSON | void) => this.view.drawNews((data))));
        this.controller.getSources((data): (IDataJSON | void) => (this.view.drawSources(data)));

        // (data: IDataJSON) => (IDataJSON | void)
    }
}

// export default App;
