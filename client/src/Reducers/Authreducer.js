import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ['niyi'],
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    Signin(state, action) {},
  },
});

export const { Signin } = AuthSlice.actions;
export default AuthSlice.reducer;
