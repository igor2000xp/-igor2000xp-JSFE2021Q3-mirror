import { News } from './news/news';
import { Sources } from './sources/sources';
import { IArtNews, IValuesData } from '../interfaces/interfacesAndTypes';

export class AppView {
  private news: News;

  private sources: Sources;

  public constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: IValuesData) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: IValuesData) {
    const values: Array<IArtNews> = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}