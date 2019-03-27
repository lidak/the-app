import { LOG_OUT, SET_USER, SAVE_LIABILITY, DELETE_LIABILITY } from './constants';

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

export const saveLiability = (payload) => {
  return {
    type: SAVE_LIABILITY,
    payload
  };
};

export const deleteLiability = (payload) => {
  return {
    type: DELETE_LIABILITY,
    payload
  };
};
