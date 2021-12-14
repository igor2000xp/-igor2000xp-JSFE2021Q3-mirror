import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';
import {
  IValuesData,
} from '../interfaces/interfacesAndTypes';

// let data: IValuesData;
export class App {
  protected controller: AppController;

  protected view: AppView;

  public constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const callbackNews = (data: IValuesData): void => this.view.drawNews(data);
    document
      .querySelector('.sources')!
      .addEventListener('click', (e) =>
        this.controller.getNews(e, callbackNews),
      );
    const callback = (data: IValuesData): void => this.view.drawSources(data);
    this.controller.getSources(callback);
  }
}