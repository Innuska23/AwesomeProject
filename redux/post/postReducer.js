import { createSlice } from '@reduxjs/toolkit';
import { postList } from './postOperations';

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postList.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});
