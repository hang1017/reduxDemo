import { post, get } from '../../services';

export default {
  listUserESearchLog: (params) => {
    return post('api/es/searchLog/listUserESearchLog', params);
  },
  keywordsList: (params) => {
    return get('api/b2b/keywords/list', params);
  }
}