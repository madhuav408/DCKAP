import productConstants from "../constants";

const initialState={
    products:[],
}
const cart=[]

export const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        case productConstants.SET_PRODUCTS:
            return {...state,products:action.payload}
        default:
            return state;
    }

}

export const productCartReducer=(state=cart,{type,payload})=>{
    switch (type) {
        case productConstants.ADD_CART:
            state.push(payload)
            if(state.length>0){
              const  jsonObject = state.map(JSON.stringify);      
            const uniqueSet = new Set(jsonObject);
            const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
            state=uniqueArray
            // if(localStorage.getItem("cart")!==null){
            //     localStorage.setItem("cart",JSON.stringify(state))
            // }
            
            }
            // else{
            //     if(localStorage.getItem("cart")!==null){
            //          state=JSON.parse(localStorage.getItem("cart"))
            //          console.log(state)
            //     }
            // }
            return state;
        case productConstants.UPDATE_QUANTITY:
            const update=state.map((product) => product.sku===payload.sku ? payload : product)
            console.log(update)
            return state=update
        case productConstants.DELETE_PRODUCT:
            const product=state.filter(data=>data.sku!==payload.sku && data)
            return state=product
        default:
            return state;
    }
}