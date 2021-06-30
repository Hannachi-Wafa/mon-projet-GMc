import {
    ADD_COMMANDE_FAIL,
    ADD_COMMANDE_SUCCESS,
    GET_COMMANDE_FAIL,
    GET_COMMANDE_SUCCESS,
    DELETE_COMMANDE_FAIL,
    DELETE_COMMANDE_SUCCESS,
    UPDATE_COMMANDE_FAIL,
    UPDATE_COMMANDE_SUCCESS,
    VALIDATE_COMMANDE_FAIL,
    VALIDATE_COMMANDE_SUCCESS,

    
    ADD_LIGNECOMMANDE_SUCCESS,
    GET_LIGNECOMMANDE_SUCCESS,
    UPDATE_LIGNECOMMANDE_SUCCESS,
    DELETE_LIGNECOMMANDE_SUCCESS,
    ADD_LIGNECOMMANDE_FAIL,
    GET_LIGNECOMMANDE_FAIL,
    UPDATE_LIGNECOMMANDE_FAIL,
    DELETE_LIGNECOMMANDE_FAIL,
} from '../actions/types'


const initState = {
    errors: null,
    commande: [],
    lignecommande: [],

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

        case VALIDATE_COMMANDE_SUCCESS:
            return {
                ...state,
                errors: null,
                commande: state.commande.map((el) => {
                    if (el._id === action.payload._id) return action.payload;
                    return el;
                }),
            };

        //CRUD LIGNE COMMANDE
        case ADD_LIGNECOMMANDE_SUCCESS:
            return {
                ...state,
                lignecommande: [...state.lignecommande, action.payload],
                errors: null,
            };
        case GET_LIGNECOMMANDE_SUCCESS:
            return {
                ...state,
                lignecommande: action.payload,
                errors: null,
            };
        case UPDATE_LIGNECOMMANDE_SUCCESS:
            return {
                ...state,
                errors: null,
                LIGNECOMMANDE: state.lignecommande.map((el) => {
                    if (el._id === action.payload._id) return action.payload;
                    return el;
                }),
            };
        case DELETE_LIGNECOMMANDE_SUCCESS:
            return {
                ...state,
                errors: null,
                lignecommande: state.lignecommande.filter(
                    (el) => el._id !== action.payload._id
                ),
            };
        case ADD_LIGNECOMMANDE_FAIL:
        case GET_LIGNECOMMANDE_FAIL:
        case UPDATE_LIGNECOMMANDE_FAIL:
        case DELETE_LIGNECOMMANDE_FAIL:
        case VALIDATE_COMMANDE_FAIL:
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
