import { post } from '../../services';

export default {
  toLogin: (params) => {
    post('/api/user/userTradeLogin', params).then(res => {
      console.log(res);
    });
  }
}