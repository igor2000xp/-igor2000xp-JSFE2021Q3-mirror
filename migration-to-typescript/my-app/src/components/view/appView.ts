import { News } from './news/news';
import { Sources } from './sources/sources';
import { IArtNews } from '../controller/loader'

export interface IValuesDataSources {
  articles?: Array<IArtNews>;
  sources?: Array<IArtNews>;
};

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IValuesDataSources) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IValuesDataSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

// export default AppView;
