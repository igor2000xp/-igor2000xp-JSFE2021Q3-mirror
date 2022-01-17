import { AppLoader } from './appLoader';
import { Callback } from '../interfaces/interfacesAndTypes';
export class AppController extends AppLoader {
  public getSources(callback: Callback): void {
    super.getResp(
      {
        endpoint: 'sources',
        options: {},
      },
      callback,
    );
  }

  public  getNews(e: Event, callbackNews: Callback): void {
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
            callbackNews,
          );
        }
        return;
      }
      target = target!.parentNode as HTMLElement;
    }
  }
}
