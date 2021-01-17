import { getAllUsers } from '../utils/api';

export const USER_ACTION = {
  USERS_REQUEST_INIT: 'users api init', //start
  USERS_REQUEST_SUCCESS: 'User api success', //success
  USERS_REQUEST_ERROR: ' User api error', //error
};

export const initApi = () => {
  return {
    type: USER_ACTION.USERS_REQUEST_INIT,
  };
};

export const successApi = (data) => {
  return {
    type: USER_ACTION.USERS_REQUEST_SUCCESS,
    payload: data,
  };
};

export const errorApi = (error) => {
  return {
    type: USER_ACTION.USERS_REQUEST_ERROR,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(initApi());
    getAllUsers()
      .then((response) => {
        dispatch(successApi(response.data));
      })
      .catch((er) => {
        dispatch(errorApi(er.error));
      });
  };
};
