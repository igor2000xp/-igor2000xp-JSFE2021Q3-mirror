import { AppLoader } from './appLoader';
import { IArtNews, IDataJSON } from '../interfaces/interfacesAndTypes';

export class AppController extends AppLoader {
  // callback: (data?: IDataJSON) => void
  // getSources(callback = (): (IDataJSON | void) => {}) {
  getSources(callback: (dataIn?: IDataJSON) => void) {
    super.getResp(
      {
        endpoint: 'sources',
        options: {},
      },
      callback
    );
  }

  // getNews(e: Event, callback = (): (IDataJSON | void) => {}) {
  getNews(e: Event, callback: (dataIn?: IDataJSON) => void) {
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
            callback
          );
        }
        return;
      }
      target = target!.parentNode as HTMLElement;
    }
  }
}
