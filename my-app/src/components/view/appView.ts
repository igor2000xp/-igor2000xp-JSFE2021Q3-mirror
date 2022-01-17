import { News } from './news/news';
import { Sources } from './sources/sources';
import { IArtNews, IDataValue } from '../interfaces/interfacesAndTypes';

export class AppView {
  private news: News;

  private sources: Sources;

  public constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: IDataValue) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: IDataValue) {
    const values: Array<IArtNews> = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}