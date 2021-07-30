import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducer  from './index.js'


/*const initstate={
    cart: {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        shippingAddress: localStorage.getItem('shippingAddress')
          ? JSON.parse(localStorage.getItem('shippingAddress'))
          : {},
        paymentMethod: 'PayPal',
      },
}*/


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;