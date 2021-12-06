import { AppLoader } from './apploader';
import { IArtNews, IDataJSON } from './loader';


export class AppController extends AppLoader {
  getSources(callback = (): (IDataJSON | void) => {}) {
      super.getResp(
          {
              endpoint: 'sources',
              options: {},
          },
          callback
      );
  }

  getNews(e: Event, callback = (): (IDataJSON | void) => {}) {
      let target = e.target;
      const newsContainer = e.currentTarget;

      while (target !== newsContainer) {
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
                      callback,
                  );
              }
              return;
          }
          target = target!.parentNode;
      }
  }
}