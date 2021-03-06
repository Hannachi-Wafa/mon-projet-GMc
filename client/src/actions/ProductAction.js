import {
    GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS, UPDATE_PRODUCT_IMAGE_FAIL,DELETE_PRODUCT_FAIL, POST_PRODUCT_SUCCESS, POST_PRODUCT_FAIL, GET_ITEM
} from "./types"

import axios from "axios"
import { tokenSet } from "../helpers/tokenSet"


export const getproduct = (data, history,) => async (dispatch) => {
   
    try {
        const res = await axios.get(`/product/products/`, data)
        console.log(res)
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAIL, payload: error?.response?.data?.error })
    }
}


export const addproduct = (data,file) => async (dispatch) => {
    tokenSet();
    let formData=new FormData()
    formData.append("images",file)
    formData.append("data",JSON.stringify(data))
    try {
        const res = await axios.post('/product/newproducts',formData,{headers: {"auth-token":localStorage.getItem('auth-token')}}
        )
        dispatch( {type: POST_PRODUCT_SUCCESS,
            payload: res.data})
            console.log(res.data)
    } catch (error) {
        dispatch({ type: POST_PRODUCT_FAIL, payload: error?.response?.data?.error })
    }
}

export const deleteproduct = (id) => async (dispatch) => {
    tokenSet();
    try {
        const res = await axios.delete(`/product/products/${id}`,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch(getproduct())
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAIL, payload: error?.response?.data?.error 
        })
    }
    
}
export const updateproduct = (data,file,id) => async (dispatch) => {
    tokenSet();
    let formData=new FormData()
    if(file===null){
        formData.append("images",null)
    }
    else{
        formData.append("images",file)
    }
    formData.append("data",JSON.stringify(data))
        
    try {
        const res = await axios.put(`/product/products/${id}`, formData,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch( getproduct())
    } catch (error) {
        dispatch({ type: UPDATE_PRODUCT_FAIL, payload: error?.response?.data?.error 
        })
    }
}
/*export const updateimage= (data,file,id) => async (dispatch) => {
    tokenSet();
    let formData=new FormData()
    formData.append("images",file)
    formData.append("data",JSON.stringify(data))

    try {
        const res = await axios.put(`/product/products/image/${id}`, formData,{headers: {"auth-token":localStorage.getItem('auth-token')}})
        dispatch( getproduct())
    } catch (error) {
        dispatch({ type: UPDATE_PRODUCT_IMAGE_FAIL, payload: error?.response?.data?.error 
        })
    }
}
*/
export const getDetails = id => dispatch => {
    dispatch({type: GET_ITEM, payload: id})
}

