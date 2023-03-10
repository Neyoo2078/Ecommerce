import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:["niyi"],
}

const AuthSlice = createSlice({
    "name": "AuthSlice",
    initialState,
    reducers:{
        Signin(state,action){

        }
    }
})


export default AuthSlice.reducer