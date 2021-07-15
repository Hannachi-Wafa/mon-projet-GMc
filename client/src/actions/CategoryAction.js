import {GET_CATEGORY_SUCCESS,GET_CATEGORY_FAIL,
    UPPDATE_CATEGORY_SUCCESS,UPPDATE_CATEGORY_FAIL,
    DELETE_CATEGORY_SUCCESS,DELETE_CATEGORY_FAIL,CATEGORY_GET_ITEM,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL} from "./types"

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

/*export const getbycategory=(category,data)=>async (dispatch)=>{
    const {data} = await axios.get(`/product/products/${category}`)
    
    dispatch([{
        type:CATEGORY_GET_ITEM,
        payload:{
            product: data._id,
            title:data.title,
            images:data.images,
            price:data.price,
            qteStock:data.qteStock,
            description:data.description
          
        }
    }])
    //localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
    }*/
    export const getbycategory=(category,data,res)=>async (dispatch)=>{
   
        try {
            const {data} = await axios.get(`/product/products/${category}`)
            console.log(res)
            dispatch({ type: CATEGORY_GET_ITEM, payload: res.data })
        } catch (error) {
            dispatch({ type: GET_PRODUCT_FAIL, payload: error?.response?.data?.error })
        }
    }