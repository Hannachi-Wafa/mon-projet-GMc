import {
    GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL,
    UPPDATE_CATEGORY_SUCCESS, UPPDATE_CATEGORY_FAIL,
    DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL, ADD_COMMANDE_SUCCESS, ADD_COMMANDE_FAIL, UPDATE_COMMANDE_FAIL, UPDATE_COMMANDE_SUCCESS, GET_COMMANDE_FAIL, GET_COMMANDE_SUCCESS
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


