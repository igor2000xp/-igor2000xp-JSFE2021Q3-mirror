export type Options = {
  [apiKey: string]: string;
};

export type OptionsEmpty = {};

export interface dataSources {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
  author?: string;
  urlToImage?: string;
  publishedAt?: string;
  title: string;
  content?: string;
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

export interface IDataJSON {
  status: string;
  sources: Array<dataSources>;
}

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

export type Res = {
  ok: boolean;
  status: number;
  statusText: string;
};

export interface IValuesData {
  status: string;
  totalResults?: number;
  articles?: Array<IArtNews>;
  sources?: Array<IArtNews>;
};
export interface IGetResp
{
  endpoint: string,
  options: {},
}
export interface Callback {
  // data: T;
  (data: IValuesData): void;
}
// export interface Callback<T> = 
// {
//    (data: T): void
// };

// interface ISumFunc {
//   (a: number, b: number):number;
// }

// data?: T[];
// callback: () => T[];


// const numericStorage: MyStorage<number> = {
//   values: [],
//   getValues() {
//     return this.values;
//   }
// }