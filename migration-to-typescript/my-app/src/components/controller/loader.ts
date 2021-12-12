// import fetch from "node-fetch";
import { Options, OptionsEmpty, Res, IValuesData, IDataJSON, Callback } from '../interfaces/interfacesAndTypes'

export class Loader {
  baseLink: string;
  options: Options;

  constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string, options: (Options | OptionsEmpty) },
    // callback = (data: IValuesData): (IValuesData | void) => {
      callback: (data: IValuesData) => void 
  ): void {
    // if(typeof callback !=== "function") {

      // => {
      //   console.error('No callback for GET response');
      // }
      console.log('getResp = ' + { options });
    // }

    // !!
    // options = {apiKey: '1b18e3d30f3a4a898f7c37fb3a806419',};
    console.log('getResp = ' + Object.values(options));
    // !!
    console.log("from getResp callback: " + callback);
    this.load('GET', endpoint, callback, options);
    // this.load('GET', endpoint, options);
  }

  errorHandler(res: Response) {
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
// async load(
   load(
    method: string,
    endpoint: string,
    callback: (data: IValuesData) => void,
    options: (Options | OptionsEmpty) = {}
     ) {
    // !!
    console.log(method + '--' + endpoint + '--- ' + callback + '-- ' + Object.values(options));
    console.log(this.makeUrl(options, endpoint));

    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((response: Response) => {
        return response.json();
      })
      .then((data: IValuesData) => {
        console.log(data);
        console.log("func = " + callback);
        return callback(data!);
      })
      .catch((err: string) => console.error(err));
    // !!


      // .then((res: Response) => {res.json(); console.log("then Response res = " + res.json);})
      // .then((data: IValuesData) => { console.log("then data = " + callback); callback(data);})
      // .then((res: IValuesData) => { console.log("then data = " + callback); callback(res);})
      // .then((data: IValuesData) => { console.log("then data = " + data)})
      // .then((data: IValuesData) => callback(data))
      // {
        // console.log(data); 
        // console.log(callback(data)); 
        // return callback(data);
        // console.log("data = " + data); 
        // console.log(callback(data)); 
        // callback(data);
      // })
      // .then((data) => callback(data))


    // .then(this.errorHandler)
    // .then((res) => res.json())
    // .then((data) => callback(data))
    // .catch((err) => console.error(err));


    // const response = await fetch(this.makeUrl(options, endpoint), { method });
    // const data = await response.json();
    // console.log('load');
  }
}
// export default Loader;

// const loader = new Loader('https://nodenews.herokuapp.com/', {apiKey: '1b18e3d30f3a4a898f7c37fb3a806419'});


