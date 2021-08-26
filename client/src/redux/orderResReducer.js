import { CREATE_ORDER_RESRVE, CLEAR_ORDER_RESRVE, FETCH_ORDERS_RESRVE } from "../actions/types";

const orderResReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_RESRVE:
      return { orderres: action.payload };
  
    case CLEAR_ORDER_RESRVE:
      return { orderres: null };
    case FETCH_ORDERS_RESRVE:
      return { ordersres: action.payload };
    default:
      return state;
  }
};
export { orderResReducer };