import { combineReducers } from 'redux';
import todoReducer from './todos';
import { reducer } from './todos'

const rootReducer = combineReducers({
    // todos: todoReducer,
    todos: reducer,
});

export default rootReducer;