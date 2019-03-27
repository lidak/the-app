import { combineReducers } from 'redux';

import user from './user';
import liabilities from './liabilities';

export default combineReducers({
  user,
  liabilities
});
