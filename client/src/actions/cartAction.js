import axios from 'axios'
import { tokenSet } from '../helpers/tokenSet';
import{CART_ADD_ITEM , CART_REMOVE_ITEM} from './types'

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
    }
})
//localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart =(id)=>(dispatch,getState)=>{
 dispatch({
     type: CART_REMOVE_ITEM,
     payload: id,
 })  
 //localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
 
} 

