import {call, put, takeLatest} from 'redux-saga/effects';
import { fetchTodos } from '../../api';

function* handleGetTodos() {
    try {
        const response = yield call(fetchTodos);
        yield put({type: "LOAD_TODOS", payload: response})
    } catch (error) {
       console.log(error);
    }
}

export function* todosSagas(){
    yield takeLatest('GET_TODOS', handleGetTodos)
}