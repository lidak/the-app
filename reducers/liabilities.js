import {
  SAVE_LIABILITY,
  DELETE_LIABILITY
} from '../actions/constants';

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_LIABILITY:
      return [
        ...state,
        action.payload
      ];
    case DELETE_LIABILITY:
      const filteredLiabilities = state.filter((liability) => (liability.title !== action.payload.title));
      return [
        ...filteredLiabilities
      ];
    default:
      return state;
  }
};
