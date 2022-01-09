function sendRequest(method, url) {
  return fetch(url, { method }).then((response) => response.json());
}

class Http {
  static get(url) {
    return sendRequest('GET', url);
  }

  static post(url, data) {
    return sendRequest('POST', url, data);
  }
}

const http = new Http();

export default http;
