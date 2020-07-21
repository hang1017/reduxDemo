import axios from 'axios';
import generateUUID from '../utils/uuid';
import { encodeAES } from '../utils/encodeUtil';
import { KEY_AES } from '../utils';

export const post = (url, params) => {
  return axios({
    method: 'post',
    url,
    data: params,
    body: JSON.stringify(params),
    headers: {
      'content-type': 'application/json',
      token: window.localStorage.getItem('token') || '', // 头部统一加tocken
      sxb: encodeAES(generateUUID(), KEY_AES), //  防csrf
    },
    credentials: 'include',
  })
}
export const get = (url, params) => {

  let queryStr = `?t=${+new Date()}`;
  if (params) {
    queryStr += '&';
    Object.keys(params).forEach((key) => {
      if (Array.isArray(params[key])) {
        // HPP参数污染  改用逗号分割数组
        queryStr += `${encodeURIComponent(key)}=${encodeURIComponent(params[key].join(','))}&`;
        // params[key].forEach((str) => {
        //   queryStr += `${encodeURIComponent(key)}=${encodeURIComponent(str)}&`;
        // });
      } else {
        queryStr += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`;
      }
    });
  }
  const newUrl = (url + queryStr).slice(0, (url + queryStr).length - 1);

  return axios({
    method: 'get',
    url: newUrl,
    data: params,
    body: JSON.stringify(params),
    headers: {
      'content-type': 'application/json',
      token: window.localStorage.getItem('token') || '', // 头部统一加tocken
      sxb: encodeAES(generateUUID(), KEY_AES), //  防csrf
    },
    credentials: 'include',
  })
}