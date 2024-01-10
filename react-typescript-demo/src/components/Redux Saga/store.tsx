import {createStore, combineReducers, applyMiddleware} from 'redux';
import {UserReducer} from './reducers/UsersReducer'
import createSagaMiddleware from 'redux-saga'
import mysaga from './Sagas/mysaga'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({UserReducer});
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mysaga);
export type AppState = ReturnType<typeof rootReducer>;