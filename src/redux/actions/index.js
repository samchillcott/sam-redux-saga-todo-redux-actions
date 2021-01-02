import { createAction } from 'redux-actions';

export const addTodo = createAction('ADD_TODO');
export const completeTodo = createAction('COMPLETE_TODO');
export const removeTodo = createAction('REMOVE_TODO');
export const editTodo = createAction('EDIT_TODO');
export const useDownloadTodos = createAction('USE_DOWNLOAD_TODOS');

//Action Creator
// export const addTodo = (todoText) => {
//     // return an action
//     return {
//         type: 'ADD_TODO',
//         payload: todoText
//     }
// }

// export const completeTodo = (todo) => {
//     return {
//         type: 'COMPLETE_TODO',
//         payload: todo
//     }
// }

// export const removeTodo = (todo) => {
//     return {
//         type: 'REMOVE_TODO',
//         payload: todo
//     }
// }

// export const editTodo = (newTodo) => {
//     return {
//         type: 'EDIT_TODO',
//         payload: newTodo
//     }
// }

// export const useDownloadTodos = (newTodos) => {
//     console.log("downloadTodos action fired");
//     return {
//         type: 'USE_DOWNLOAD_TODOS',
//         payload: newTodos
//     }
// }