import React from 'react'
import {
  useHistory,
} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
} from 'react-bootstrap'

import{
  requestAddTodo,
  requestUpdateTodo,
} from '../../actions';
import TodoForm from '../../components/TodoForm'

const mapState = state => state.todos.data;

const FormContainer = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const todos = useSelector(mapState);
  const id = match.params.id ? Number(match.params.id) : null;
  const todo = id ? todos.find(todo => todo.id === id) : null;

  return (
    <Row>
      <Col xs="6">
        <TodoForm
          initialValues={todo
            ? {
              title: todo.title,
              completed: todo.completed,
            } : {
              title: '',
              completed: false,
              userId: 1,
            }
          }
          onSubmit={(values, actions) => {
            if (id) {
              dispatch(requestUpdateTodo(id, values));
            } else {
              dispatch(requestAddTodo(values));
            }
            setTimeout(() => {
              actions.setSubmitting(false);
              history.push('/');
            }, 800);
          }}
        />
      </Col>
    </Row>
  );
}


export default FormContainer;
