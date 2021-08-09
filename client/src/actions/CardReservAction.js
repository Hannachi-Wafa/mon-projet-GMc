import axios from 'axios'
import { tokenSet } from '../helpers/tokenSet';
import { ReservCardReducer } from '../redux/ReservCardReducer';

import{RESERVATION_ADD_ITEM , RESERVATION_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from './types'

export const addToCartReservation=(id,prx)=>async (dispatch,getState)=>{

    const {data} = await axios.get(`/theme/theme/${id}`)
    
    dispatch({
        type:RESERVATION_ADD_ITEM,
        payload:{
            theme: data._id,
            dateReservation: data.dateReservation,
            images:data.images,
            nbrPersonne: data.nbrPersonne,
            prix: data.prix_theme,
            title:data.title,
        },
    });
    //localStorage.setItem("cartItems",(getState().cartItems));
    }

    export const removeFromCartReservation =(id)=>(dispatch,getState)=>{
        dispatch({
            type: RESERVATION_REMOVE_ITEM,
            payload: id,
        });  
        //localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
        
        }

        export const saveShippingAddress = (data) => (dispatch) => {
            dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
          //  localStorage.setItem('shippingAddress', JSON.stringify(data));
        };
        export const savePaymentMethod = (data) => (dispatch) => {
        dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
        };