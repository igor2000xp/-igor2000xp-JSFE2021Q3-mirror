import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';
import {
  IArtNews,
  IDataJSON,
  IValuesData,
  Callback
} from '../interfaces/interfacesAndTypes';

// interface IDataSources {
//   endpoint: string;
//   callback: void;
// };
let data: IValuesData;
export class App {
  controller: AppController;
  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    // let dataResponse: (IDataJSON | void);
    // let dataSources: IValuesDataSources;
    // const callback = (data:IValuesData): Callback<IValuesData> => this.view.drawSources(data));
    let dataResponse: IValuesData;
    const callbackNews = (data: IValuesData): void => this.view.drawNews(data);
    document
      .querySelector('.sources')!
      .addEventListener('click', (e) =>
        this.controller.getNews(e, callbackNews)
      );
      const callback = (data: IValuesData): void => this.view.drawSources(data);
      this.controller.getSources(callback);

    // (data: IDataJSON) => (IDataJSON | void)
  }
}

// export default App;
