import {createStore} from 'redux';
import rootreducers from '../Reducer/index';
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
//import {thunkMiddleware} from 'redux-thunk/default'
import {composeWithDevTools} from 'redux-devtools-extension'


export const store= createStore(rootreducers,composeWithDevTools(applyMiddleware(logger)))

export const persistor=persistStore(store)
export default {store,persistor}