import { createSlice } from "@reduxjs/toolkit";
import { localDataNames } from "../../constants/appInfo";


export interface AuthState{
    token:string;
    _id:string;
    name:string;
    rule:number;
}

const initialState={
    token:'',
    _id:'',
    name:'',
    rule:0
}

const authSlice=createSlice({
    name:'auth',
    initialState:{
        data:initialState,
    },
    reducers:{
        addAuth:(state,action)=>{
            state.data=action.payload;
            syncLocal(action.payload);
        },
        removeAuth:(state,_action)=>{
            state.data=initialState;
            syncLocal({});
        }
    }
})

export const authReducer=authSlice.reducer
export const {addAuth,removeAuth}=authSlice.actions

export const authSeletor = (state:any) => state.authReducer.data;

const syncLocal=(data:any)=>{
    localStorage.setItem(
        localDataNames.authData,
        JSON.stringify(data)
    );
}