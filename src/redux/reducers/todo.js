import { editTodo, loadTodos } from '../actions/todo';

import { handleActions } from 'redux-actions';

const initialState = [];
let newState;

export const reducer = handleActions({
    // [completeTodo]: (
    //     todos, action
    // ) => {
    //     newState = todos.map(todo => {
    //         if (todo.key === action.payload.key) {
    //             action.payload.isComplete = !action.payload.isComplete
    //             return action.payload   
    //         } else {
    //             return todo
    //         }
    //     });
    //     return newState
    // },
    [editTodo]: (
        todos, action
        ) => {
            newState = todos.map(todo => {
            if (todo.key === action.payload.key) {
                return action.payload
            } else {
                return todo
            }
        });
        return newState
        },
    [loadTodos]: (
        _, action
    ) => {
        return action.payload
    }
}, initialState);