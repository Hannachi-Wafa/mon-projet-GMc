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
} from "./types"

import axios from "axios"
import { tokenSet } from "../helpers/tokenSet";


export const addCommande = (data) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.post("/commande/newcommande", data,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch({
            type: ADD_COMMANDE_SUCCESS,
            payload: res.data,
        })
    } catch (errors) {
        dispatch({
            type: ADD_COMMANDE_FAIL,
            payload: errors.response.data.errors,
        })
    }
}
export const getCommande = (data) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.get("/commande/commande", data,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch({
            type: GET_COMMANDE_SUCCESS,
            payload: res.data,
        })
    } catch (errors) {
        dispatch({
            type: GET_COMMANDE_FAIL,
            payload: errors.response.data.errorss,
        })
    }
}
export const updateCommande = (id,data) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.put(`/commande/${id}`, data,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch({
            type: UPDATE_COMMANDE_SUCCESS,
            payload: res.data,
        })
    } catch (errors) {
        dispatch({
            type: UPDATE_COMMANDE_FAIL,
            payload: errors.response.data.errorss,
        })
    }
}
export const deleteCommande = (id) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.get(`/commande/${id}`,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch({
            type: DELETE_COMMANDE_SUCCESS,
            payload: res.data})
    } catch (errors) {
        dispatch({
            type: DELETE_COMMANDE_FAIL,
            payload: errors.response.data.errorss,
        })
    }
}

export const validationCommande = (id) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.put(`/commande/`, {id},{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch({ type: VALIDATE_COMMANDE_SUCCESS,
             payload: res.data })

    } catch (errors) {
        dispatch({
            type: VALIDATE_COMMANDE_FAIL,
            payload: errors.response.data.errorss,
        })
    }
}

//Actions of lignecommande
// 1-Add lignecommande Action
export const addLignecommande = (lignecommande) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.post("/lignecommande/newligneC", lignecommande,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch({
          type: ADD_LIGNECOMMANDE_SUCCESS,
          payload: res.data,
        })
    } catch(errors) {
        dispatch({
          type: ADD_LIGNECOMMANDE_FAIL,
          payload: errors.response.data.errorss,
        })
    }
  };
  //2-Get lignecommande Action
  export const getLignecommande = (lignecommande) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.get("/lignecommande/ligneC", lignecommande,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch({
          type: GET_LIGNECOMMANDE_SUCCESS,
          payload: res.data,
        })
    } catch(errors) {
        dispatch({
          type: GET_LIGNECOMMANDE_FAIL,
          payload: errors.response.data.errorss,
        })
    }
  };
  //3-Update lignecommande Action
  export const updateLignecommande = (id) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.put(`/lignecommande/${id}`,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch({
          type: UPDATE_LIGNECOMMANDE_SUCCESS,
          payload: res.data,
        })
    } catch(errors) {
        dispatch({
          type: UPDATE_LIGNECOMMANDE_FAIL,
          payload: errors.response.data.errorss,
        })
    }
  };
  //4-Delete lignecommande Action
  export const deleteLignecommande = (id) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.delete(`/lignecommande/${id}`,{headers: {"auth-token":localStorage.getItem('auth-token')}})
      dispatch({
        type: DELETE_LIGNECOMMANDE_SUCCESS,
        payload: res.data,
      })
  } catch(errors) {
      dispatch({
        type: DELETE_LIGNECOMMANDE_FAIL,
        payload: errors.response.data.errorss,
      })
  }
};
  