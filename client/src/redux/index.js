import {combineReducers} from 'redux'
import authReducer from './authReducer'
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import cardReducer from './cardReducer'


export default combineReducers({authReducer,productReducer,categoryReducer,cardReducer})