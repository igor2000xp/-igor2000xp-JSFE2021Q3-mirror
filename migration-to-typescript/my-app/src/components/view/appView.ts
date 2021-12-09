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
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

// export default AppView;
