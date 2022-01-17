import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';
import {
  Callback,
} from '../interfaces/interfacesAndTypes';

export class App {
  protected controller: AppController;

  protected view: AppView;

  public constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const callbackNews: Callback = (data): void => this.view.drawNews(data);
    document
      .querySelector('.sources')!
      .addEventListener('click', (e) =>
        this.controller.getNews(e, callbackNews),
      );
    const callback: Callback = (data): void => this.view.drawSources(data);
    this.controller.getSources(callback);
  }
}