import { v4 as uuidv4 } from 'uuid';
import { saveTodos } from '../../api';

const initialState = [];
let newState;
const todoReducer = (todos = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            newState = [...todos, 
                {isComplete: false,
                key: uuidv4(),
                text: action.payload
                }];
            saveTodos(newState);
            return newState
        case 'COMPLETE_TODO':
            console.log({payload: action.payload},"completeTodo from reducer");
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
        case 'REMOVE_TODO':
            console.log({payload: action.payload},"removeTodo fired from reducer");
            newState = todos.filter(todo => todo.key !== action.payload.key)
            saveTodos(newState);
            return newState
        case 'EDIT_TODO':
            console.log({payload: action.payload},"edit fired from reducer");
            newState = todos.map(todo => {
               if (todo.key === action.payload.key) {
                   return action.payload
               } else {
                   return todo
               }
            });
            saveTodos(newState);
            return newState
        case 'USE_DOWNLOAD_TODOS':
            console.log({payload: action.payload},"download fired from reducer");
            return action.payload
        default:
            return todos
    }
}

export default todoReducer;