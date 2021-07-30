import { CART_ADD_ITEM , CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from '../actions/types'

const initState={
  cartItems: JSON.parse(localStorage.getItem('cartItem'))|| []
}

  export const cartReducer=(state=initState,action)=>{
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existeItem=state.cartItems.find(x=>x.product===item.product);
            if(existeItem){
              const tempCart=state.cartItems.map(
                (x)=>x.product===existeItem.product? item: x 
             )
             localStorage.setItem('cartItem',JSON.stringify(tempCart))
            return{
                ...state,
                cartItems:tempCart
            }
            }else{
              
              localStorage.setItem('cartItem',JSON.stringify([...state.cartItems , item]))
                return{
                    ...state,
                    cartItems: [...state.cartItems , item]
                }
            }


            case CART_SAVE_SHIPPING_ADDRESS:
                return { ...state, shippingAddress: action.payload };
              case CART_SAVE_PAYMENT_METHOD:
                return { ...state, paymentMethod: action.payload };
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter(x=>x.product !==action.payload)
            }
        default:
            return state
    }
}
/*import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.type) {
    case  CART_ADD_ITEM:
      return { cartItems: action.payload.cartItems };
    case CART_REMOVE_ITEM:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};*/