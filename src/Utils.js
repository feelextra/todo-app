import { API_URL, SLASH, TODO_TITLE } from "./constants/index.js";
import axios from "axios";

export const uploadServerCreateTodo = (
  updateStateCreateTodo,
  inputCreateTodoValue
) => {
  const params = new URLSearchParams();
  params.append([TODO_TITLE], inputCreateTodoValue);

  axios
    .post(API_URL, params)
    .then(res => {
      if (res.status === 201) {
        const todo = res.data; // { 'id':..., 'title':..., 'completed':... }
        updateStateCreateTodo(todo);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const downloadServerReadTodos = updateStateReadTodos => {
  axios
    .get(API_URL)
    .then(res => {
      if (res.status === 200) {
        const todos = res.data; // [ { 'id':..., 'title':..., 'completed':... }, {...}, ... ]
        updateStateReadTodos(todos);
      } else {
        console.log("Received READ response status code unusual");
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const uploadServerUpdateTodo = (
  updateStateUpdateTodo,
  inputUpdateTodoValue,
  itemId
) => {
  const params = new URLSearchParams();
  params.append([TODO_TITLE], inputUpdateTodoValue);

  axios
    .put(API_URL + itemId.toString() + SLASH, params)
    .then(res => {
      if (res.status === 200) {
        const updatedTodo = res.data; // { 'id':..., 'title':..., 'completed':... }
        updateStateUpdateTodo(itemId, updatedTodo);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const uploadServerDeleteTodo = (updateStateDeleteTodo, itemId) => {
  axios
    .delete(API_URL + itemId.toString() + SLASH)
    .then(res => {
      if (res.status === 204) {
        updateStateDeleteTodo(itemId);
      }
    })
    .catch(err => {
      console.log(err);
    });
};