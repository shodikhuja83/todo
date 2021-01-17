  import axios from 'axios';

const baseurl = 'https://jsonplaceholder.typicode.com';

export function getAllTodos(){
  return axios.get(`${baseurl}/todos`)
}

export function addTodo(payload){
  return axios.post(`${baseurl}/todos`, payload)
}

export function updateTodo(id, payload){
  return axios.put(`${baseurl}/todos/${id}`, payload)
}

export function deleteTodo(id, payload){
  return axios.delete(`${baseurl}/todos/${id}`)
}

export function getAllUsers(){
    return axios.get(`${baseurl}/users`)
}
