import ApiUtils from './ApiUtils';
import config from '../config';
export default {
  getListofProducts: function () {
    const url = `${config.baseUrl}/products`;
    return fetch(url)
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .catch(e => e);
  },
  getProduct: function (productId: number) {
    const url = `${config.baseUrl}/products/${productId}`;
    return fetch(url)
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .catch(e => e);
  },
};
