import { News } from './news/news';
import { Sources } from './sources/sources';
import { IArtNews, IValuesData } from "../interfaces/interfacesAndTypes"

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IValuesData) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IValuesData) {
    console.log("from drawSources data = ");
    console.log(data);
    // !!
    const values: Array<IArtNews> = data?.sources ? data?.sources : [];
    console.log("from drawSources values = " + values);
    // !!
    this.sources.draw(values);
  }
}

// export default AppView;
