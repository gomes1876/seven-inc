import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import funcionarios from './reducers/funcionarios'
// import { reducers } from './reducers/funcionarios'

export const store = createStore(funcionarios, applyMiddleware(thunkMiddleware));