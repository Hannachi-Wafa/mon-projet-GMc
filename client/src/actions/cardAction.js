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


export const addCommande = (data) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.post("/commande/newcommande", data)
        dispatch({
            type: ADD_COMMANDE_SUCCESS,
            payload: res.data,
        })
    } catch (error) {
        dispatch({
            type: ADD_COMMANDE_FAIL,
            payload: err.response.data.errors,
        })
    }
}
export const getCommande = (data) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.get("/commande/commande", data)
        dispatch({
            type: GET_COMMANDE_SUCCESS,
            payload: res.data,
        })
    } catch (error) {
        dispatch({
            type: GET_COMMANDE_FAIL,
            payload: err.response.data.errors,
        })
    }
}
export const updateCommande = (id) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.put(`/commande/${id}`, data)
        dispatch({
            type: UPDATE_COMMANDE_SUCCESS,
            payload: res.data,
        })
    } catch (error) {
        dispatch({
            type: UPDATE_COMMANDE_FAIL,
            payload: err.response.data.errors,
        })
    }
}
export const deleteCommande = (id) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.get(`/commande/${id}`)
        dispatch({
            type: DELETE_COMMANDE_SUCCESS,
            payload: res.data})
    } catch (error) {
        dispatch({
            type: DELETE_COMMANDE_FAIL,
            payload: err.response.data.errors,
        })
    }
}

export const validationCommande = (id) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.put(`/commande/`, {id})
        dispatch({ type: VALIDATE_COMMANDE_SUCCESS,
             payload: res.data })

    } catch (error) {
        dispatch({
            type: VALIDATE_COMMANDE_FAIL,
            payload: err.response.data.errors,
        })
    }
}

//Actions of lignecommande
// 1-Add lignecommande Action
export const addLignecommande = (lignecommande) => (dispatch) => {
    tokenSet();
    try {
        const res = await axios.post("/lignecommande/newligneC", lignecommande)
        dispatch({
          type: ADD_LIGNECOMMANDE_SUCCESS,
          payload: res.data,
        })
    } catch(error) {
        dispatch({
          type: ADD_LIGNECOMMANDE_FAIL,
          payload: err.response.data.errors,
        })
    }
  };
  //2-Get lignecommande Action
  export const getLignecommande = () => (dispatch) => {
    tokenSet();
    try {
        const res = await axios.get("/lignecommande/ligneC", lignecommande)
        dispatch({
          type: GET_LIGNECOMMANDE_SUCCESS,
          payload: res.data,
        })
    } catch(error) {
        dispatch({
          type: GET_LIGNECOMMANDE_FAIL,
          payload: err.response.data.errors,
        })
    }
  };
  //3-Update lignecommande Action
  export const updateLignecommande = (id) => (dispatch) => {
    tokenSet();
    try {
        const res = await axios.put(`/lignecommande/${id}`)
        dispatch({
          type: UPDATE_LIGNECOMMANDE_SUCCESS,
          payload: res.data,
        })
    } catch(error) {
        dispatch({
          type: UPDATE_LIGNECOMMANDE_FAIL,
          payload: err.response.data.errors,
        })
    }
  };
  //4-Delete lignecommande Action
  export const deleteLignecommande = (id) => (dispatch) => {
    tokenSet();
    try {
        const res = await axios.delete(`/lignecommande/${id}`)
      dispatch({
        type: DELETE_LIGNECOMMANDE_SUCCESS,
        payload: res.data,
      })
  } catch(error) {
      dispatch({
        type: DELETE_LIGNECOMMANDE_FAIL,
        payload: err.response.data.errors,
      })
  }
};
  