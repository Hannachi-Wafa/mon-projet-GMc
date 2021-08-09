import {combineReducers} from 'redux'
import authReducer from './authReducer'
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import ThemeReducer from './ThemeReducer'
import {orderReducer} from './orderReducer'


import {cartReducer} from './cartReducer'


export default combineReducers({authReducer,
    productReducer,
    categoryReducer,
    cartReducer,
    orderReducer,
ThemeReducer,

})

