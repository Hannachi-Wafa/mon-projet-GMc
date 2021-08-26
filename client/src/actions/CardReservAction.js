import axios from 'axios'
import { tokenSet } from '../helpers/tokenSet';
import { ReservCardReducer } from '../redux/ReservCardReducer';

import{RESERVATION_ADD_ITEM , RESERVATION_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from './types'

export const addToCartReservation=(id)=>async (dispatch,getState)=>{

    const {data} = await axios.get(`/theme/theme/${id}`)
    
    dispatch({
        type:RESERVATION_ADD_ITEM,
        payload:{
            theme: data._id,
            //dateReserver: data.dateReserver,
            images:data.images,
            nbrPersonne: data.nbrPersonne,
            prix: data.prix,
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

  