import {call, put, takeLatest} from 'redux-saga/effects';
import { fetchTodos } from '../../api';

function* handleGetTodos(dispatch) {
    console.log(dispatch);
    try {
        console.log("handleDownloadTodos worker saga fired");
        const response = yield call(fetchTodos);
        console.log({response});
        // yield put(() => ({type: 'USE_DOWNLOAD_TODOS', payload: response}))
        // yield put({type: "LOAD_TODOS", payload: response})
        yield put({type: "LOAD_TODOS", payload: response})
        console.log("check");
        // yield put({type: 'USE_DOWNLOAD_TODOS'})
    } catch (error) {
       console.log(error);
    }
}

export function* todosSagas(){
    yield takeLatest('GET_TODOS', handleGetTodos)
}