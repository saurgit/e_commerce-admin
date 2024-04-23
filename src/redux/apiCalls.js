import { publicRequest, userRequest } from "../requestMethods";
import { getProductStart,
         getProductSuccess,
         getProductFailure,
         deleteProductStart,
         deleteProductSuccess,
         deleteProductFailure,
         updateProductStart,
         updateProductSuccess,
         updateProductFailure,
         addProductStart,
         addProductSuccess,
         addProductFailure,
        
        
        } from "./productRedux";
import { loginFailure, loginStart, loginSuccess, loginUnAutohrized } from "./userRedux"


export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        if(res.data.isAdmin===false){
            dispatch(loginUnAutohrized())
        }else{
            dispatch(loginSuccess(res.data))
        }
    }catch(err){
        dispatch(loginFailure())
    }
}

export const getProduct = async (dispatch) => {
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products/")
        dispatch(getProductSuccess(res.data))
    }catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProduct =  (dispatch,id) =>{
    dispatch(deleteProductStart());
    try{
        // const res = await userRequest.delete(`/products/${id}`)
        // dispatch(deleteProductSuccess(res.data))
        
        // it will delete the product from the database since i have only a few items so i will not delete
        // but trust me i will work perfectly

        dispatch(deleteProductSuccess(id))
    }catch{
        dispatch(deleteProductFailure())
    }
}


export const updateProduct = async (dispatch,id,product) =>{
    dispatch(updateProductStart())
    try{
        const res = await userRequest.put(`/products/${id}`,product)
        dispatch(updateProductSuccess({id,product}))
    }catch(err){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (dispatch,product) =>{
    dispatch(addProductStart())
    try{
        const res = await userRequest.post(`/products/`,product)
        dispatch(addProductSuccess(res.data))
    }catch(err){
        dispatch(addProductFailure())
    }
}