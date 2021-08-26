import { CREATE_ORDER_RESRVE, CLEAR_CART_RESRVE, CLEAR_ORDER_RESRVE, FETCH_ORDERS_RESRVE ,POST_ORDER_RESRVE_FAIL} from "./types";
import axios from "axios"
import { tokenSet } from "../helpers/tokenSet"
/*export const createOrder = (data) => (dispatch) => {
  fetch("/order/orders", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      localStorage.clear("cartItems");
      dispatch({ type: CLEAR_CART });
    });
};*/
export const createOrderres = (data) => async (dispatch) => {
  tokenSet();
 
  try {
      const res = await axios.post("/orderres/orders",data,{headers: {"auth-token":localStorage.getItem('auth-token')}}
      )
      dispatch( {type: CREATE_ORDER_RESRVE,
          payload: res.data})
         // localStorage.clear("cartItems");
          dispatch({ type: CLEAR_CART_RESRVE });
          console.log(res.data)
  } catch (error) {
      dispatch({ type: POST_ORDER_RESRVE_FAIL, payload: error?.response?.data?.error })
  }
}

export const clearOrderres = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER_RESRVE });
};
/*export const fetchOrders = () => (dispatch) => {
  fetch("/order/orders")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ORDERS, payload: data });
    });
};*/

export const getOrdersres = (data, history,) => async (dispatch) => {
   
  try {
      const res = await axios.get("/orderres/orders", data)
      console.log(res)
      dispatch({ type: FETCH_ORDERS_RESRVE, payload: res.data })
  } catch (error) {
      dispatch({ type: POST_ORDER_RESRVE_FAIL, payload: error?.response?.data?.error })
  }
}