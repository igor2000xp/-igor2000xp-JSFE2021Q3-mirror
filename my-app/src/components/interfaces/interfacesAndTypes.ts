export type Options = {
  [apiKey: string]: string;
};

export interface IArtNews extends ISource, IArticles {
  articles?: IArticles;
  source: ISource;
}
export interface IArticles {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt?: string;
  content: string;
  language?: string;
  country?: string;
  category?: string;
}

interface ISource {
  name: string;
  id: string;
}

export interface IDataValue {
  status: string;
  totalResults?: number;
  articles?: Array<IArtNews>;
  sources?: Array<IArtNews>;
}
export interface IGetResp {
  endpoint: string,
  options: Record<string, never>,
}

export type Callback = (data: IDataValue) => void;
