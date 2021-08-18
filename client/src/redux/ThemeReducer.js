
import  {GET_THEME_SUCCESS,
    GET_THEME_FAIL,
    UPDATE_THEME_SUCCESS,
    UPDATE_THEME_FAIL,
    DELETE_THEME_SUCCESS,
    DELETE_THEME_FAIL,
    POST_THEME_SUCCESS,
    POST_THEME_FAIL,
    GET_ITEMS} from "../actions/types";

const initState = {Theme:[],
    errors: null,
    }

const ThemeReducer = (state = initState, { type, payload }) => {


    switch (type) {
        case  UPDATE_THEME_SUCCESS:
    case  GET_THEME_SUCCESS:
    return{...state,Theme:payload,errors:null}
    case POST_THEME_SUCCESS:
                return {
                ...state,
                Theme: state.Theme.map((el) => {
                    if (el._id === payload._id) {
                    return payload;
                    }
                    return el;
                }),
                };
                case UPDATE_THEME_FAIL:
                    return {
                    ...state,
                    Theme: state.Theme,
                    errors: payload,
                    };
    case DELETE_THEME_SUCCESS:
        return {
            ...state,
            Theme: state.Theme.filter((el) => el._id !== payload._id),
            errors: null,
        };
    
    
            case DELETE_THEME_FAIL:
            return {
                ...state,
                Theme: state.Theme,
                errors: payload,
            };




        case POST_THEME_FAIL:
        case GET_THEME_FAIL:

        return{...state,errors:payload}
        case GET_ITEMS:
            return{
                ...state,
                themeId: payload
            }
        
            default:
                return state;
        }
}

export default ThemeReducer
