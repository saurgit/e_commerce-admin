import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name: "user",
    initialState:{
        currentUser : null,
        isFetching:false,
        error:false,
        admin:null,
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true;
            state.error=false;
            state.admin=null;
        },
        loginSuccess:(state,action) =>{
            state.isFetching=false;
            state.currentUser=action.payload;
            state.admin=true;
        },
        loginFailure:(state,action)=>{
            state.isFetching=false;
            state.error=true;
        },
        loginUnAutohrized:(state)=>{
            state.admin=false;
            state.isFetching=false;
        }
    }

});

export const { loginStart,loginFailure,loginSuccess,loginUnAutohrized } = userSlice.actions
export default userSlice.reducer;

