import {GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL,
    UPPDATE_PRODUCT_SUCCESS,UPPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,POST_PRODUCT_SUCCESS,POST_PRODUCT_FAIL} from "./types"

import axios from "axios"

export const getproduct=(data,history)=>async(dispatch)=>{
try {
    const res=await axios.get('/product/products',data)
    console.log(res)
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
} catch (error) {
    dispatch({type:GET_PRODUCT_FAIL,payload:error?.response?.data?.error})
}
}
export const postproduct=(data,history)=>async(dispatch)=>{
    try {
        const res=await axios.post('/product/newproducts',data)
        console.log(res)
        dispatch({type:POST_PRODUCT_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:POST_PRODUCT_FAIL,payload:error?.response?.data?.error})
    }
    }
    
