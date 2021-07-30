import { RESERVATION_ADD_ITEM , RESERVATION_REMOVE_ITEM} from '../actions/types'

export const cartResrveReducer=(state={cartItems:[]},action)=>{
    switch (action.type) {
        case RESERVATION_ADD_ITEM:
           // localStorage.setItem("cartItems",(state.cartItems));
            const item = action.payload;
            const existeItem=state.cartItems.find(x=>x.theme===item.theme);
            if(existeItem){
            return{
                ...state,
                cartItems:state.cartItems.map(
                (x)=>x.theme===existeItem.product? item: x 
                )
            }
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems , item]
                }
            }

        case RESERVATION_REMOVE_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter(x=>x.theme !==action.payload)
            }
        default:
            return state
    }
}
