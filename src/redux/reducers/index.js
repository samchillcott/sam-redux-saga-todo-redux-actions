import { reducer } from './todos'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: reducer,
});

export default rootReducer;