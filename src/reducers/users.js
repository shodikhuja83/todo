import { USER_ACTION } from '../actions';

const initialstate = {
  data: [],
  loading: false,
  error: '',
};

const mainReducer = (state = initialstate, action) => {
  switch (action.type) {
    case USER_ACTION.USERS_REQUEST_INIT:
      return {
        ...state,
        loading: true,
      };
    case USER_ACTION.USERS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case USER_ACTION.USERS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default mainReducer;

