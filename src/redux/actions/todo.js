import { createAction } from 'redux-actions';

export const addTodo = createAction('ADD_TODO');
export const completeTodo = createAction('COMPLETE_TODO');
export const removeTodo = createAction('REMOVE_TODO');
export const editTodo = createAction('EDIT_TODO');
export const getTodos = createAction('GET_TODOS');
export const loadTodos = createAction('LOAD_TODOS');