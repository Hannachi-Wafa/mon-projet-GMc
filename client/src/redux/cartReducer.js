import { CART_ADD_ITEM , CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from '../actions/types'



  export const cartReducer=(state={cartItems: []},action)=>{
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existeItem=state.cartItems.find(x=>x.product===item.product);
            if(existeItem){
            return{
                ...state,
                cartItems:state.cartItems.map(
                   (x)=>x.product===existeItem.product? item: x 
                )
            }
            }else{
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