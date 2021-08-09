import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from "../actions/types";

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
     /* case CREATE_ORDER:
        return {
          ...state,
          order: state.order.map((el) => {
            if (el._id === action.payload._id) {
              return action.payload;
            }
            return el;
          }),
        };*/
    case CLEAR_ORDER:
      return { order: null };
    case FETCH_ORDERS:
      return { orders: action.payload };
    default:
      return state;
  }
};
export { orderReducer };