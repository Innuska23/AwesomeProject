import { createSlice } from '@reduxjs/toolkit';
import { authSignIn, authSignOut, authSignUp } from './authOperations';

const initialState = {
  username: null,
  email: null,
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authSignIn.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isLogin = true;
    });

    builder.addCase(authSignOut.fulfilled, (state) => {
      state.username = null;
      state.email = null;
      state.isLogin = false;
    });

    builder.addCase(authSignUp.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isLogin = true;
    });
  },
});
