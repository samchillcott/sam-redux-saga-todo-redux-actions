import { fork } from 'redux-saga/effects'
import { todosSagas } from './todo'

export default function* rootSaga() {
  yield fork(todosSagas)
}