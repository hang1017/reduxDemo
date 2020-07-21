import { get } from '../../services';

export default {
  queryListRegions: (params) => {
    return get('api/region/listRegions', params);
  }
}