import {GET_ITEM,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL,POST_PRODUCT_FAIL,POST_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_SUCCESS,UPPDATE_PRODUCT_SUCCESS,UPPDATE_PRODUCT_FAIL} from "../actions/types";
const initState = {Products:[],
errors: null,
}
const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
    case  GET_PRODUCT_SUCCESS:
    return{...state,Products:payload,errors:null}
    case POST_PRODUCT_SUCCESS:
        return {
            ...state,
            Products: [...state.Products,payload],
            errors: null,
        };
    case DELETE_PRODUCT_SUCCESS:
        return {
            ...state,
            Products: state.Products.filter((el) => el._id !== payload._id),
        };
    case POST_PRODUCT_FAIL:
    case GET_PRODUCT_FAIL:
    return{...state,errors:payload}
    case GET_ITEM:
        return{
            ...state,
            prodId: payload
        }
       
        default:
            return state;
    }
}
export default productReducer