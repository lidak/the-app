import { SET_USER, LOG_OUT } from '../actions/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      const {
        name,
        id
      } = action.payload;

      return {
        name,
        id
      };
    case LOG_OUT:
      return {};
    default:
      return state;
  }
};
