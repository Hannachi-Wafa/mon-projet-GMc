import { CREATE_ORDER_RESRVE,
    CLEAR_CART_RESRVE,
    CLEAR_ORDER_RESRVE,
    FETCH_ORDERS_RESRVE } from "./types";

        export const createOrderReserve = (orderRese) => (dispatch) => {
            fetch("/ordersRese", {
            method: "POST",
            body: JSON.stringify(orderRese),
            })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: CREATE_ORDER_RESRVE, payload: data });
                localStorage.clear("cartrItems");
                dispatch({ type: CLEAR_CART_RESRVE });
            });
        };

        

        export const clearOrderResrve = () => (dispatch) => {
            dispatch({ type: CLEAR_ORDER_RESRVE });
        };

            export const fetchOrdersReserve = () => (dispatch) => {
                fetch("/orders")
                .then((res) => res.json())
                .then((data) => {
                    dispatch({ type: FETCH_ORDERS_RESRVE, payload: data });
                });
            };