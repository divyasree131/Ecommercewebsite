import CartReducer from './CartReducer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig={
    key:'root',
    storage,
    whitelist:['CartReducer']
}
const rootreducer=combineReducers({CartReducer})
export default persistReducer(persistConfig,rootreducer)
