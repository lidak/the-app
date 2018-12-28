import { SET_USER } from '../actions/constants';

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
    default:
      return state;
  }
};
