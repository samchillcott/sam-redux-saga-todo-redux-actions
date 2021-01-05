import { loadTodos } from '../actions/todo';

import { handleActions } from 'redux-actions';

const initialState = [];

export const reducer = handleActions({ 
    [loadTodos]: (
        _, action
    ) => {
        return action.payload
    }
}, initialState);