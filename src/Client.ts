import axios from 'axios';
import Site from './Site';

axios.defaults.baseURL = 'https://monitoringapi.solaredge.com';

class Client {
  apiKey: string;
  site: Site;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('No API key');
    }

    this.apiKey = apiKey;
    this.site = new Site(this);
  }

  request(opts: any) {
    const { url, params } = opts;

    return axios
      .get(url, {
        params: {
          api_key: this.apiKey,
          ...params,
        },
        timeout: 5000,
      })
      .then(r => r.data)
      .catch(e => {
        let error = new Error();
        error.message = e.response
          ? { status: e.response.status, message: e.response.statusText }
          : e.request
          ? { status: '500', message: 'Internal Server Error' }
          : e.message;
        throw error;
      });
  }
}

export default Client;
