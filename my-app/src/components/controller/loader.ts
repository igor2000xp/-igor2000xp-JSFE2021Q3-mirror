import {
  Options,
  IDataValue,
} from '../interfaces/interfacesAndTypes';

export class Loader {
  private baseLink: string;

  private options: Options;

  protected constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    {
      endpoint,
      options = {},
    }: { endpoint: string; options: Options | Record<string, never> },
    callback: (data: IDataValue) => void,
  ): void {
    if (callback.toString() == '') {
      console.error('No callback for GET response');
    }
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`,
        );
      throw Error(res.statusText);
    }
    return res;
  }

  private makeUrl(options: Options | Record<string, never>, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;
    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });
    return url.slice(0, -1);
  }

  private load(
    method: string,
    endpoint: string,
    callback: (data: IDataValue) => void,
    options: Options | Record<string, never> = {},
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((response: Response) => {
        return response.json();
      })
      .then((data: IDataValue) => {
        return callback(data!);
      })
      .catch((err: string) => console.error(err));
  }
}
