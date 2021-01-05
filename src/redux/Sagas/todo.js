import { todos } from '../../selectors';
import todosAPI from '../../API/Endpoints/todo';
import { addTodo, completeTodo, getTodos, loadTodos, removeTodo } from '../actions/todo';

import { v4 as uuidv4 } from 'uuid';
import {call, put, select, takeLatest} from 'redux-saga/effects';

function* handleGetTodos() {
    const response = yield call(todosAPI.fetchTodos);   
    if (response.status === 200) {
        yield put(loadTodos(response.data))
    } else {
        alert(response.statusText);
    }
}

function* handleAddTodo({payload: text}) {
    const allTodos = yield select(todos);
    console.log(allTodos);
    const newTodo = {
        isComplete: false,
        key: uuidv4(),
        text
    }
    const updatedTodos = [...allTodos, newTodo]
    console.log(updatedTodos);
    const response = yield call(todosAPI.saveTodos, updatedTodos);
    if (response.status === 200) {
            yield put(loadTodos(response.data))
        } else {
            alert(response.statusText);
        }
}

function* handleCompleteTodo(action) {
    const allTodos = yield select(todos);
    const updatedTodos = allTodos.map(todo => {
        if (todo.key === action.payload.key) {
            action.payload.isComplete = !action.payload.isComplete
            return action.payload   
        } else {
            return todo
        }
    });
    const response = yield call(todosAPI.saveTodos, updatedTodos);   
    if (response.status === 200) {
        yield put(loadTodos(response.data))
    } else {
        alert(response.statusText);
    }
}

function* handleRemoveTodo({payload: key}) {
    const allTodos = yield select(todos);
    const updatedTodos = allTodos.filter((todo) => todo.key !== key);
    const response = yield call(todosAPI.saveTodos, updatedTodos);   
    if (response.status === 200) {
        yield put(loadTodos(response.data))
    } else {
        alert(response.statusText);
    }
}

export function* todosSagas(){
    yield takeLatest(getTodos, handleGetTodos);
    yield takeLatest(addTodo, handleAddTodo);
    yield takeLatest(completeTodo, handleCompleteTodo);
    yield takeLatest(removeTodo, handleRemoveTodo);
}