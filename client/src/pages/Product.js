import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Productcard from './Productcard'
import { useDispatch } from 'react-redux'
import {getproduct} from '../actions/ProductAction'
const Product = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getproduct())
        }
    , [])
    const products = useSelector(state => state.productReducer.Products)
    return (
        <div>
            {products && products.map(product=><Productcard key={product._id} product={product}/>)}
        </div>
    )
}

export default Product
