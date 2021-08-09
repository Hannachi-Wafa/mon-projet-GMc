import { CART_ADD_RESERVE_ITEM,
    CART_REMOVE_RESERVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS
    } from '../actions/types';

    const initState={
        cartrItems: JSON.parse(localStorage.getItem('cartrItem'))|| []
    }

    export const ReservCardReducer=(state=initState,action)=>{
        switch (action.type) {
            case CART_ADD_RESERVE_ITEM:
                const item = action.payload;
                const existeItem=state.cartrItems.find(x=>x.Theme===item.Theme);
                if(existeItem){
                  const tempCart=state.cartrItems.map(
                    (x)=>x.Theme===existeItem.Theme? item: x 
                 )
                 localStorage.setItem('cartrItem',JSON.stringify(tempCart))
                return{
                    ...state,
                    cartrItems:tempCart
                }
                }else{
                  
                  localStorage.setItem('cartrItem',JSON.stringify([...state.cartrItems , item]))
                    return{
                        ...state,
                        cartrItems: [...state.cartrItems , item]
                    }
                }
    
    
                case CART_SAVE_SHIPPING_ADDRESS:
                    return { ...state, shippingAddress: action.payload };
                  case CART_SAVE_PAYMENT_METHOD:
                    return { ...state, paymentMethod: action.payload };
            case CART_REMOVE_RESERVE_ITEM:
                return {
                    ...state,
                    cartrItems:state.cartrItems.filter(x=>x.Theme !==action.payload)
                }
            default:
                return state
        }
    }