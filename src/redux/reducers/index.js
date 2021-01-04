import { reducer } from './todo'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: reducer,
});

export default rootReducer;