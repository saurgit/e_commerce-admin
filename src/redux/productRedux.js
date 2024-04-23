import { createSlice} from '@reduxjs/toolkit'

export const productSlice=createSlice({
    name:'product',
    initialState:{
        product:[],
        isFetching:false,
        error:false,
    },
    reducers:{
        // get products
        getProductStart:(state) =>{
            state.isFetching=true;
            state.error=false;
        },
        getProductSuccess:(state,action) =>{
            state.isFetching=false;
            state.product=action.payload;
        },
        getProductFailure:(state) =>{
            state.isFetching=false;
            state.error=true;
        },
        // Delete product
        deleteProductStart:(state) =>{
            state.isFetching=true;
            state.error=false;
        },
        deleteProductSuccess:(state,action) =>{
            state.isFetching=false;
            state.product.splice(
                // finding the index of item to be deleted
                state.product.findIndex((item)=> item._id===action.payload),
                1
                // 1 represent only one item to be deleted
            );
        },
        deleteProductFailure:(state) =>{
            state.isFetching=false;
            state.error=true;
        },

        // Update Product
        updateProductStart:(state) =>{
            state.isFetching=true;
            state.error=false;
        },
        updateProductSuccess:(state,action) =>{
            state.isFetching=false;
            state.product[
                state.product.findIndex((item)=>item._id === action.payload.id)   
            ] = action.payload.product
        },
        updateProductFailure:(state) =>{
            state.isFetching=false;
            state.error=true;
        },

        // Adding Product
        addProductStart:(state) =>{
            state.isFetching=true;
            state.error=false;
        },
        addProductSuccess:(state,action) =>{
            state.isFetching=false;
            state.product.push(action.payload)
        },
        addProductFailure:(state) =>{
            state.isFetching=false;
            state.error=true;
        },
    },
})

export const {  getProductStart,
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
            }=productSlice.actions

export default productSlice.reducer


