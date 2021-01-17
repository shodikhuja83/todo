import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Link
} from "react-router-dom";
import {
  Row,
  Col,
} from 'react-bootstrap'

import{
  requestDeleteTodo,
} from '../../actions';
import TodoList from '../../components/TodoList'

const mapState = state => ({
  todos: state.todos.data.map(
    todo => ({
      ...todo,
      user: state.users.data.find(user => user.id === todo.userId)
    })
  )
})

function Home(){
  const dispatch = useDispatch()
  const { todos } = useSelector(mapState);

  useEffect(() => {
    document.title = `Todo (${todos.length})`;
  });

  return (
    <>
      <Row>
        <Col>
          <h3>Todo app</h3>
        </Col>
        <Col xs={10}>
          <Link to="/new">
            Create
          </Link>
        </Col>
      </Row>
      <TodoList
        todos={todos}
        onRequestDelete={(id) => {
          dispatch(requestDeleteTodo(id))
        }}
      />
    </>
  );
}


export default Home;
