import { CART_ADD_RESERVE_ITEM,
    CART_REMOVE_RESERVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS,
    CLEAR_CART_RESRVE,
    RESERVATION_ADD_ITEM,
    RESERVATION_REMOVE_ITEM
    } from '../actions/types';

    const initState={
        cartrItems: JSON.parse(localStorage.getItem('cartrItem'))|| []
    }

    export const ReservCardReducer=(state=initState,action)=>{
        switch (action.type) {
            case RESERVATION_ADD_ITEM:
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
    
    
            case RESERVATION_REMOVE_ITEM:
                localStorage.setItem('cartrItem',JSON.stringify(state.cartrItems.filter(x=>x.Theme !==action.payload)))

                return {
                    ...state,
                    cartrItems:state.cartrItems.filter(x=>x.Theme !==action.payload)
                }
                /* case CLEAR_CART_RESRVE:
            localStorage.clear("cartrItems");
            return { cartrItems: [] }; */
            case CLEAR_CART_RESRVE:

                return { cartrItems: [] };

            default:
                return state
        }
    }