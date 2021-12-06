import fetch from "node-fetch";

export type Options = {
  [apiKey: string]: string;
};

export type OptionsEmpty = {
};

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
  }
  source?: {
    name: string;
    id: string;
  };
};

export interface IDataJSON {
  status: string;
  sources: Array<dataSources>;
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
};


export type Res = {
  ok: boolean;
  status: number;
  statusText: string;
};


export class Loader {
  baseLink: string;
  options: Options;

constructor(baseLink: string, options: Options) {
  this.baseLink = baseLink;
  this.options = options;
}

getResp(
  { endpoint, options = {} }: {endpoint: string, options:(Options | OptionsEmpty)},
  callback = (): (IDataJSON | void) => {
    console.error('No callback for GET response');
  }
):void {
console.log('getResp = ' + {options});  
// !!
// options = {apiKey: '1b18e3d30f3a4a898f7c37fb3a806419',};
console.log('getResp = ' + Object.values(options));  
// !!
this.load('GET', endpoint, callback, options);
}

errorHandler(res:Res): (Res | undefined) {
  if (!res.ok) {
    if (res.status === 401 || res.status === 404)
      console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
    throw Error(res.statusText);
  }

  return res;
}

makeUrl(options: (Options | OptionsEmpty), endpoint: string): string {
  const urlOptions = { ...this.options, ...options };
  // !!
  // console.log('urlOptions = ' + urlOptions);
  let url = `${this.baseLink}${endpoint}?`;
  // !!
  // console.log(urlOptions);
  console.log(endpoint);
  console.log('options keys = ' + Object.keys(options));
  console.log('options value = ' + Object.values(options));
  console.log('this.options = ' + Object.keys(this.options));
  console.log('this.options = ' + Object.values(this.options));

  Object.keys(urlOptions).forEach((key) => {
    url += `${key}=${urlOptions[key]}&`;
  });
  //  !!
  // console.log(url.slice(0, -1));
  return url.slice(0, -1);
}

async load(
  method: string, 
  endpoint: string, 
  callback: (data: IDataJSON) => (IDataJSON | void), 
  options:(Options | OptionsEmpty) = {}
  ): Promise<void> {
    // !!
  console.log(method + '--' + endpoint + '--- ' + callback + '-- ' + Object.values(options));
  console.log(this.makeUrl(options, endpoint));


  // fetch: (this.makeUrl(options, endpoint), { method })
  //   .then(this.errorHandler)
  //   .then((res) => res.json())
  //   .then((data: IDataJSON) => callback(data))
  //   .catch((err: string) => console.error(err));
    // !!

  const response = await fetch(this.makeUrl(options, endpoint), { method });
  const data = await response.json();

    console.log('load');
  }
}
// export default Loader;

// const loader = new Loader('https://nodenews.herokuapp.com/', {apiKey: '1b18e3d30f3a4a898f7c37fb3a806419'});


