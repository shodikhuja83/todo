import React from 'react';
import {
  Link
} from "react-router-dom";
import {
  Badge,
  Button,
  Table,
} from 'react-bootstrap'

const TodoList = ({ todos, onRequestDelete }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Status</th>
        <th>User</th>
        <th>Title</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => {
        return (
          <tr key={todo.id}>
            <td>
              <Badge variant={todo.completed ? 'success' : 'danger'}>
                {todo.completed ? 'On' : 'Off'}
              </Badge>
            </td>
            <td>{todo.user.name}</td>
            <td>{todo.title}</td>
            <td>
              <Button
                size="sm"
                variant="danger"
                onClick={() => {
                  if (window.confirm('Are you sure?')) {
                    onRequestDelete(todo.id);
                  }
                }}
              >
                Delete
              </Button>
              {' '}
              <Link to={`edit/${todo.id}`}>
                Edit
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);

export default TodoList;
