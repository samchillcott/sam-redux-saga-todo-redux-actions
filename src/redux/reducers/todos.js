import { saveTodos } from '../../api';
import { addTodo, completeTodo, editTodo, removeTodo, useDownloadTodos } from '../actions';

import { v4 as uuidv4 } from 'uuid';
import { handleActions } from 'redux-actions';

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
        saveTodos(newState);
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
        saveTodos(newState);
        return newState
    },
    [removeTodo]: (
        todos, action
    ) => {
        newState = todos.filter(todo => todo.key !== action.payload.key)
        saveTodos(newState);
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
        saveTodos(newState);
        return newState
        },
    [useDownloadTodos]: (
        action
    ) => {
        return action.payload
    }
}, initialState);