import { fork } from 'redux-saga/effects'
import { todosSagas } from './todosSagas'

export default function* rootSaga() {
  yield fork(todosSagas)
}