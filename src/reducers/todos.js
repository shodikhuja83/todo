import { TODO_ACTION } from '../actions';

const initialstate = {
  data: [],
  loading: false,
  error: '',
};

const mainReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TODO_ACTION.TODOS_REQUEST_INIT:
      return {
        ...state,
        loading: true,
      };
    case TODO_ACTION.TODOS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case TODO_ACTION.TODOS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TODO_ACTION.TODOS_REQUEST_ADD:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case TODO_ACTION.TODOS_REQUEST_UPDATE:
      const old = state.data.find(item => item.id === action.meta)
      return {
        ...state,
        data: [
          {...old, ...action.payload},
          ...state.data.filter(item => item.id !== action.meta)
        ],
      };
    case TODO_ACTION.TODOS_REQUEST_DELETE:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.meta),
      };

    default:
      return { ...state };
  }
};

export default mainReducer;

