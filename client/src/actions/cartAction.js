import axios from 'axios'
import { tokenSet } from '../helpers/tokenSet';
import { cartReducer } from '../redux/cartReducer';
import{CART_ADD_ITEM , CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from './types'

export const addToCart=(id,qty)=>async (dispatch,getState)=>{
    const {data} = await axios.get(`/product/products/${id}`)

dispatch({
    type:CART_ADD_ITEM,
    payload:{
        product: data._id,
        title:data.title,
        images:data.images,
        price:data.price,
        qteStock:data.qteStock,
        qty
    },
});
}

export const removeFromCart =(id)=>(dispatch,getState)=>{
 dispatch({
     type: CART_REMOVE_ITEM,
     payload: id,
 });  
 
} 

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  };
  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
  };