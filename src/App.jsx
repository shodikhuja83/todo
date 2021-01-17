import React, {
  useEffect,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Spinner,
  Container,
} from 'react-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import{
  fetchUsers,
  fetchTodos,
} from './actions';

import Home from './containers/Home';
import FormContainer from './containers/FormContainer';

const mapState = state => ({
  loading: state.todos.loading || state.users.loading,
})

function App(){
  const dispatch = useDispatch()
  const {
    loading,
  } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchTodos())
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />
            <Route
              path="/new"
              component={FormContainer}
            />
            <Route
              path="/edit/:id"
              component={FormContainer}
            />
          </Switch>
        </Router>
      )}
    </Container>
  );
}


export default App;
