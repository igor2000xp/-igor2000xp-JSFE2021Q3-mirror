import { AppLoader } from './appLoader';
import { IArtNews, IDataJSON, IValuesData, Callback } from '../interfaces/interfacesAndTypes';
// import { App, controller } from '../app/app';
export class AppController extends AppLoader {
  // callback: (data?: IDataJSON) => IValuesData
  // getSources(callback = (): (IDataJSON | void) => {}) {
  getSources(callback: (data: IValuesData) => void): void {
    super.getResp(
      {
        endpoint: 'sources',
        options: {},
      },
      callback
    );
  }

  // class AppController extends AppLoader {
  //   getSources(callback) {
  //       super.getResp(
  //           {
  //               endpoint: 'sources',
  //           },
  //           callback
  //       );
  //   }

  // getNews(e: Event, callback = (): (IDataJSON | void) => {}) {
  getNews(e: Event, callbackNews: (data: IValuesData) => void): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== (newsContainer as HTMLElement)) {
      if (target!.classList.contains('source__item')) {
        const sourceId = target!.getAttribute('data-source-id')!;
        if (newsContainer!.getAttribute('data-source') !== sourceId) {
          newsContainer!.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callbackNews
          );
        }
        return;
      }
      target = target!.parentNode as HTMLElement;
    }
  }
}
