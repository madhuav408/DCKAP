import productConstants from "./constants";

export const setProduct=(products)=>{
    return({
        type:productConstants.SET_PRODUCTS,
        payload:products
    })
}

export const updateQuantity=(product)=>{
    return({
        type:productConstants.UPDATE_QUANTITY,
        payload:product
    })
}
export const addCart=(product)=>{
    return({
        type:productConstants.ADD_CART,
        payload:product
    })
}

export const deleteProduct=(product)=>{
    return({
        type:productConstants.DELETE_PRODUCT,
        payload:product
    })
}