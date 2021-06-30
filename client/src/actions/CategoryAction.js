import {GET_CATEGORY_SUCCESS,GET_CATEGORY_FAIL,
    UPPDATE_CATEGORY_SUCCESS,UPPDATE_CATEGORY_FAIL,
    DELETE_CATEGORY_SUCCESS,DELETE_CATEGORY_FAIL} from "./types"

import axios from "axios"

export const getCategory=(data,history)=>async(dispatch)=>{
try {
    const res=await axios.get('/category/category',data)
    console.log(res)
    dispatch({type:GET_CATEGORY_SUCCESS,payload:res.data})
} catch (error) {
    dispatch({type:GET_CATEGORY_FAIL,payload:error?.response?.data?.error})
}
}
