export type Options = {
  [apiKey: string]: string;
};

export interface IArtNews {
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
  language?: string;
  country?: string;
  category?: string;
  id?: string;
  name?: string;
  articles?: {
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
  };
  sources?: {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
  };
  source?: {
    name: string;
    id: string;
  };
}

export interface IValuesData {
  status: string;
  totalResults?: number;
  articles?: Array<IArtNews>;
  sources?: Array<IArtNews>;
}
export interface IGetResp {
  endpoint: string,
  options: Record<string, never>,
}