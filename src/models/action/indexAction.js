import { push } from 'react-router-redux';
import { post } from '../../services';
import { createHashHistory } from "history";
import ApiCryptoUtil from '../../utils/ApiCryptoUtil';

export default {
  toLogin: (params) => {
    console.log(params);
    post('/api/user/userTradeLogin', ApiCryptoUtil.decryptUserData(params)).then(response => {
      const res = response.data.resultData;
      const { token = '' } = res;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(res));
    });
  }
}