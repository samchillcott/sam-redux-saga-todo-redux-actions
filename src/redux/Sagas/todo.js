import {call, put, select, takeLatest} from 'redux-saga/effects';
import todosAPI from '../../API/Endpoints/todo';
import { todos } from '../../selectors';
import { getTodos, loadTodos, removeTodo } from '../actions/todo';

function* handleGetTodos() {
    const response = yield call(todosAPI.fetchTodos);   
    console.log({response});
    if (response.status === 200) {
        yield put(loadTodos(response.data))
    } else {
        alert(response.statusText);
    }
}

function* handleRemoveTodo({payload: key}) {
    const allTodos = yield select(todos);
    // console.log({allTodos});
    const upDatedTodos = allTodos.filter((todo) => todo.key !== key);
    const response = yield call(todosAPI.saveTodos, upDatedTodos);   
    if (response.status === 200) {
        yield put(loadTodos(response.data))
    } else {
        alert(response.statusText);
    }
}

export function* todosSagas(){
    yield takeLatest(getTodos, handleGetTodos);
    yield takeLatest(removeTodo, handleRemoveTodo);
}