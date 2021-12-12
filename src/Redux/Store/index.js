import {createStore} from 'redux';
import rootreducers from '../Reducer/index';
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';
//import {thunkMiddleware} from 'redux-thunk/default'

const store= createStore(rootreducers,applyMiddleware(logger))

export default store
