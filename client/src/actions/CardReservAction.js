import axios from 'axios'
import { tokenSet } from '../helpers/tokenSet';
import{RESERVATION_ADD_ITEM , RESERVATION_REMOVE_ITEM} from './types'

export const addToCartReservation=(id,qty)=>async (dispatch,getState)=>{

    const {data} = await axios.get(`/reservation/reservation/${id}`)
    
    dispatch({
        type:RESERVATION_ADD_ITEM,
        payload:{
            theme: data._id,
            dateReservation: data.dateReservation,
            heure:data.heure,
            prix_theme: data.prix_theme,
            theme_id: data.theme_id,
            user_id: data.user_id,
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