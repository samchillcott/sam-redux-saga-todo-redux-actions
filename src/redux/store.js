import rootReducer from './reducers'
import rootSaga from '../redux/Sagas/rootSaga'

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const initialState = {};

const store = createStore(
    rootReducer, 
    initialState, 
    composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;