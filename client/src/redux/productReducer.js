import {UPDATE_PRODUCT_IMAGE,UPDATE_PRODUCT_IMAGE_FAIL,GET_ITEM,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL,POST_PRODUCT_FAIL,POST_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL} from "../actions/types";
const initState = {Products:[],
errors: null,
}
const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case  UPDATE_PRODUCT_SUCCESS:
          case  UPDATE_PRODUCT_IMAGE:

    case  GET_PRODUCT_SUCCESS:
    return{...state,Products:payload,errors:null}
    case POST_PRODUCT_SUCCESS:
            return {
              ...state,
              Products: state.Products.map((el) => {
                if (el._id === payload._id) {
                  return payload;
                }
                return el;
              }),
            };
            case UPDATE_PRODUCT_FAIL:
                return {
                  ...state,
                  Products: state.Products,
                  errors: payload,
                };
    case DELETE_PRODUCT_SUCCESS:
        return {
            ...state,
            Products: state.Products.filter((el) => el._id !== payload._id),
            errors: null,
        };
     
    
        case DELETE_PRODUCT_FAIL:
          return {
            ...state,
            Products: state.Products,
            errors: payload,
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