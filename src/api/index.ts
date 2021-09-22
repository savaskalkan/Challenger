import axios from 'axios';

axios.defaults.baseURL =
  'https://my-json-server.typicode.com/benirvingplt/products';

export default {
  getListofProducts: function () {
    return axios
      .get('/products')
      .then(response => response.data)
      .catch(e => e);
  },
  getProduct: function (productId: number) {
    return axios
      .get(`/products/${productId}`)
      .then(response => response.data)
      .catch(e => e);
  },
};
