import  {combineReducers}from 'redux'
import { productReducer, productCartReducer } from './productReduce'
export const reducer=combineReducers({
    allProducts:productReducer,
    cart:productCartReducer
})