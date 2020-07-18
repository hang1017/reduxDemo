import axios from 'axios';
import generateUUID from '../utils/uuid';
import { encodeAES } from '../utils/encodeUtil';
import { KEY_AES } from '../utils';

export const post = (url, params) => {
  return axios({
    method: 'post',
    url,
    data: params,
    headers: {
      'content-type': 'application/json',
      token: window.localStorage.getItem('token') || '', // 头部统一加tocken
      sxb: encodeAES(generateUUID(), KEY_AES), //  防csrf
    },
    credentials: 'include',
  })
}