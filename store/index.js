import { createStore } from 'redux';

import rootReducer from '../reducers/index';

export default createStore(
  rootReducer,
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
