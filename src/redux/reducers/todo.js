import { addTodo, completeTodo, editTodo, removeTodo, loadTodos } from '../actions/todo';

import { v4 as uuidv4 } from 'uuid';
import { handleActions } from 'redux-actions';

// const initialState = [{name: "initialState from top of reducer", isComplete: false}];
const initialState = [];
let newState;

export const reducer = handleActions({
    [addTodo]: (
        todos, { payload: text }
    ) => {
        newState = [...todos, 
            {isComplete: false,
            key: uuidv4(),
            text: text
            }];
        return newState;
    },
    [completeTodo]: (
        todos, action
    ) => {
        newState = todos.map(todo => {
            if (todo.key === action.payload.key) {
                action.payload.isComplete = !action.payload.isComplete
                return action.payload   
            } else {
                return todo
            }
        });
        return newState
    },
    [removeTodo]: (
        todos, action
    ) => {
        newState = todos.filter(todo => todo.key !== action.payload.key)
        return newState
    },
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