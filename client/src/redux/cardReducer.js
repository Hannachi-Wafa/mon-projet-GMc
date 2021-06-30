import { ADD_COMMANDE_FAIL,
     ADD_COMMANDE_SUCCESS, 
     GET_COMMANDE_FAIL,
     GET_COMMANDE_SUCCESS,
      DELETE_COMMANDE_FAIL, 
     DELETE_COMMANDE_SUCCESS,
      UPDATE_COMMANDE_FAIL, 
     UPDATE_COMMANDE_SUCCESS, 
  } from '../actions/types'


const initState = {
    errors: null,
    commande: [],
};
const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COMMANDE_SUCCESS:
            return {
                ...state,
                errors: null,
                commande: action.payload,
            };
        case ADD_COMMANDE_SUCCESS:
            return {
                ...state,
                commande: [...state.commande, action.payload],
                errors: null,
            };
       
        case DELETE_COMMANDE_SUCCESS:
            return {
                ...state,
                commandeA: state.commande.filter(
                    (el) => el._id !== action.payload._id
                ),
            };

        case UPDATE_COMMANDE_SUCCESS:
            return {
                ...state,
                errors: null,
                commande: state.commande.map((el) => {
                    if (el._id === action.payload._id) return action.payload;
                    return el;
                }),
            };
    
    
     
      
        case GET_COMMANDE_FAIL:
        case ADD_COMMANDE_FAIL:
        case UPDATE_COMMANDE_FAIL:
        case DELETE_COMMANDE_FAIL:
            return {
                ...state,
                errors: action.payload,
            };

        default:
            return state;
    }
};
export default cardReducer;
