import  {GET_THEME_SUCCESS,
    GET_THEME_FAIL,
    UPDATE_THEME_SUCCESS,
    UPDATE_THEME_FAIL,
    DELETE_THEME_SUCCESS,
    DELETE_THEME_FAIL,
    POST_THEME_SUCCESS,
    POST_THEME_FAIL,
    GET_ITEM} from "./types";

import axios from "axios"
import { tokenSet } from "../helpers/tokenSet"

export const getTheme = (data, history) => async (dispatch) => {

    try {
        const res = await axios.get('/theme/theme', data)
        console.log(res)
        dispatch({ type: GET_THEME_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_THEME_FAIL, payload: error?.response?.data?.error })
    }
}

export const addTheme = (data,file) => async (dispatch) => {
    tokenSet();
    let formData=new FormData()
    formData.append("images",file)
    formData.append("data",JSON.stringify(data))
    try {
        const res = await axios.post('/theme/newtheme',formData,{headers: {"auth-token":localStorage.getItem('auth-token')}}
        )
        dispatch( {type: POST_THEME_SUCCESS,
            payload: res.data})
            console.log(res.data)
    } catch (error) {
        dispatch({ type: POST_THEME_FAIL, payload: error?.response?.data?.error })
    }
}

export const deleteTheme = (id) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.delete(`/theme/theme/${id}`,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch(getTheme())
    } catch (error) {
        dispatch({ type: DELETE_THEME_FAIL, payload: error?.response?.data?.error 
        })
    }
    
}

export const updateTheme = (data, file,id) => async (dispatch) => {
    tokenSet();
    let formData=new FormData()
    formData.append("images",file)
    formData.append("data",JSON.stringify(data))
    try {
        const res = await axios.put(`/theme/theme/${id}`, formData,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch( getTheme())
    } catch (error) {
        dispatch({ type: UPDATE_THEME_FAIL, payload: error?.response?.data?.error 
        })
    }
}

export const getDetails = id => dispatch => {
    dispatch({type: GET_ITEM, payload: id})
}