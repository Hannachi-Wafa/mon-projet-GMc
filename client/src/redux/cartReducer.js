
import {CART_EMPTY,CART_ADD_ITEM_FAIL,CART_ADD_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD, CART_REMOVE_ITEM } from '../actions/types'


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
               localStorage.setItem('shippingAddress', JSON.stringify(action.payload ));

                return { ...state, shippingAddress: action.payload };
              case CART_SAVE_PAYMENT_METHOD:
                return { ...state, paymentMethod: action.payload };
        case CART_REMOVE_ITEM:
          localStorage.setItem('cartItem',JSON.stringify(state.cartItems.filter(x=>x.product !==action.payload)))

            return {
                ...state,
                cartItems:state.cartItems.filter(x=>x.product !==action.payload)
            }
            case CART_ADD_ITEM_FAIL:
              return { ...state, error: action.payload };
            case CART_EMPTY:
              return { ...state, error: '', cartItems: [] };
        default:
            return state
    }
}
