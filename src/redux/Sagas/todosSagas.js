import {call, put, takeLatest} from 'redux-saga/effects';
import { fetchTodos } from '../../api';

function* handleDownloadTodos() {
    console.log("handleDownloadTodos worker saga fired");
    const response = yield call(fetchTodos);
    yield put({type: 'USE_DOWNLOAD_TODOS', payload: response})
}

export function* todosSagas(){
    yield takeLatest('DOWNLOAD_TODOS', handleDownloadTodos)
}