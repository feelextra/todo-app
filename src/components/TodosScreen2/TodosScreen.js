import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import TodoList from './components/TodoList/TodoList';
import CreateTodoTextbox from './components/CreateTodoTextbox';
import wrapperRadius from './wrapperRadius';
import colors from '../../style/colors';

const centeredDivStyle = `
max-width: 550px;
min-width: 230px;
margin-left: auto;
margin-right: auto;
`;

const todoMvcStyle = `
background: #fff;
position: relative;
margin: 40px 0 40px 0;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
  0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const myStyle = `
outline: solid ${wrapperRadius}px ${colors.CYAN};
`;

const todoDiv = css`
  ${centeredDivStyle}
  ${todoMvcStyle}
  ${myStyle}
`;

const Todos = ({
  // container state
  todos,
  // container methods
  createTodo,
  editTodo,
  toggleTodo,
  deleteTodo
}) => {
  return (
    <div className={todoDiv}>
      <CreateTodoTextbox createTodo={createTodo} />
      <TodoList
        todos={todos}
        onDelete={todo => deleteTodo(todo)}
        onEdit={(todo, title) => editTodo(todo, title)}
        onToggle={todo => toggleTodo(todo)}
      />
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ),
  createTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todos;
