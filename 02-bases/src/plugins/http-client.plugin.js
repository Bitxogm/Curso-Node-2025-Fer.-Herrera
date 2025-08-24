const axios = require('axios');

// const httpClientPlugin = {
//   get: async (url, config = {}) => {
//     const { data } = await axios.get(url, { responseType: 'json', ...config });
//     return data;
//   },
//   post: async (url, body = {}, config = {}) => {
//     const { data } = await axios.post(url, body, { responseType: 'json', ...config });
//     return data;
//   },
//   put: async (url, body = {}, config = {}) => {
//     const { data } = await axios.put(url, body, { responseType: 'json', ...config });
//     return data;
//   },
//   delete: async (url, config = {}) => {
//     const { data } = await axios.delete(url, { responseType: 'json', ...config });
//     return data;
//   },
// };

const httpClient = {

  get: async(url) => {
    const {data} = await axios.get(url);
    return data
  }
}

module.exports = {
  // http: httpClientPlugin,
  http: httpClient
};










