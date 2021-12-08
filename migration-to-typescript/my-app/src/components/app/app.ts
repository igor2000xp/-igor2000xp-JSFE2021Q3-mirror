import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';
import { IArtNews, IDataJSON, IValuesDataSources } from '../interfaces/interfacesAndTypes';

// interface IDataSources {
//   endpoint: string;
//   callback: void;
// };

export class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
      // let dataResponse: (IDataJSON | void);
      let dataSources: IValuesDataSources;
      let dataArticle: IValuesDataSources;
      document
            .querySelector('.sources')!
            .addEventListener('click', (e) => this.controller.getNews(e, () => this.view.drawNews((dataArticle))));
        this.controller.getSources(() => (this.view.drawSources(dataSources)));

        // (data: IDataJSON) => (IDataJSON | void)
    }
}

// export default App;
