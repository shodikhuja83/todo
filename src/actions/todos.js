import {
  addTodo,
  updateTodo,
  deleteTodo,
  getAllTodos,
} from '../utils/api';

export const TODO_ACTION = {
  TODOS_REQUEST_INIT: 'totos api init', //start
  TODOS_REQUEST_SUCCESS: 'Todo api success', //success
  TODOS_REQUEST_ERROR: ' Todo api error', //error
  TODOS_REQUEST_ADD: ' Todo api add',
  TODOS_REQUEST_UPDATE: ' Todo api update',
  TODOS_REQUEST_DELETE: ' Todo api delete',
};

export const initApi = () => {
  return {
    type: TODO_ACTION.TODOS_REQUEST_INIT,
  };
};

export const successApi = (data) => {
  return {
    type: TODO_ACTION.TODOS_REQUEST_SUCCESS,
    payload: data,
  };
};

export const errorApi = (error) => {
  return {
    type: TODO_ACTION.TODOS_REQUEST_ERROR,
    payload: error,
  };
};

export const successAdd = (data) => {
  return {
    type: TODO_ACTION.TODOS_REQUEST_ADD,
    payload: data,
  };
};

export const successUpdate = (id, data) => {
  return {
    type: TODO_ACTION.TODOS_REQUEST_UPDATE,
    meta: id,
    payload: data,
  };
};

export const successDelete = (id) => {
  return {
    type: TODO_ACTION.TODOS_REQUEST_DELETE,
    meta: id,
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(initApi());
    getAllTodos()
      .then((response) => {
        dispatch(successApi(response.data));
      })
      .catch((er) => {
        dispatch(errorApi(er.error));
      });
  };
};

export const requestAddTodo = (payload) => {
  return (dispatch) => {
    addTodo(payload)
      .then((response) => {
        dispatch(successAdd(response.data));
      })
      .catch((er) => {
        console.error(er);
      });
  };
};

export const requestUpdateTodo = (id, payload) => {
  return (dispatch) => {
    updateTodo(id, payload)
      .then((response) => {
        dispatch(successUpdate(id, response.data));
      })
      .catch((er) => {
        console.error(er);
      });
  };
};

export const requestDeleteTodo = (id) => {
  return (dispatch) => {
    deleteTodo(id)
      .then(() => {
        dispatch(successDelete(id));
      })
      .catch((er) => {
        console.error(er);
      });
  };
};
