import {GET_CATEGORY_SUCCESS,GET_CATEGORY_FAIL,POST_CATEGORY_FAIL,POST_CATEGORY_SUCCESS,DELETE_CATEGORY_FAIL,DELETE_CATEGORY_SUCCESS,UPPDATE_CATEGORY_SUCCESS,UPPDATE_CATEGORY_FAIL} from "../actions/types";
const initState = {category:[],
errors: null,
}
const categoryReducer = (state = initState, { type, payload }) => {
    switch (type) {
    case  GET_CATEGORY_SUCCESS:
    return{...state,category:payload,errors:null}
    case GET_CATEGORY_FAIL:
    return{...state,errors:payload}

        default:
            return state;
    }
}
export default categoryReducer