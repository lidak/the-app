import { LOG_OUT, SET_USER } from './constants';

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};
