import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS ,POST_ORDER_FAIL} from "./types";
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
export const createOrder = (data) => async (dispatch) => {
  tokenSet();
 
  try {
      const res = await axios.post("/order/orders",data,{headers: {"auth-token":localStorage.getItem('auth-token')}}
      )
      dispatch( {type: CREATE_ORDER,
          payload: res.data})
         //localStorage.clear("cartItems");
          dispatch({ type: CLEAR_CART });
          console.log(res.data)
  } catch (error) {
      dispatch({ type: POST_ORDER_FAIL, payload: error?.response?.data?.error })
  }
}

export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
/*export const fetchOrders = () => (dispatch) => {
  fetch("/order/orders")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ORDERS, payload: data });
    });
};*/

export const getOrders = (data, history,) => async (dispatch) => {
   
  try {
      const res = await axios.get("/order/orders", data)
      console.log(res)
      dispatch({ type: FETCH_ORDERS, payload: res.data })
  } catch (error) {
      dispatch({ type: POST_ORDER_FAIL, payload: error?.response?.data?.error })
  }
}