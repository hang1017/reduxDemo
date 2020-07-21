import { combineReducers } from 'redux';

import IndexReducer from './indexReducer';
import HomeReducer from './homeReducer';

export default combineReducers({
  index: IndexReducer,
  home: HomeReducer,
})
