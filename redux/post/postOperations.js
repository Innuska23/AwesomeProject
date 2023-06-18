import { auth, database } from '../../firebase/config';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { child, get, getDatabase, push, ref, set } from 'firebase/database';

const defaultErrorMessage = 'Something went wrong';

export const createNewPost = createAsyncThunk(
  'post/createNewPost',
  async ({ name, cords, photoBase64, location }, { rejectWithValue, getState }) => {
    try {
      const { email, username } = getState().auth;
      const newPost = { email, name, cords, photoBase64, location };
      const result = await push(ref(database, 'posts'), newPost);

      return {};
    } catch (e) {
      return rejectWithValue(e?.message ?? defaultErrorMessage);
    }
  }
);

export const postList = createAsyncThunk('post/postList', async (_, { rejectWithValue }) => {
  try {
    const snapshot = await get(child(ref(database), 'posts'));
    let postList = [];

    if (snapshot.exists()) {
      snapshot.forEach((item) => {
        postList.push({
          id: item.key,
          ...item.val(),
        });
      });
    }
    return postList;
  } catch (e) {
    return rejectWithValue(e?.message ?? defaultErrorMessage);
  }
});

export const createNewComment = createAsyncThunk(
  'post/createNewComment',
  async ({ id, comment }, { rejectWithValue }) => {
    try {
      const { uid, displayName } = auth.currentUser;

      const newComment = {
        uid,
        displayName,
        comment,
        created_at: Date.now(),
      };

      await push(ref(database, 'comments/' + id), newComment);

      return;
    } catch (e) {
      return rejectWithValue(e?.message ?? defaultErrorMessage);
    }
  }
);

export const commentList = createAsyncThunk('post/commentList', async (id, { rejectWithValue }) => {
  try {
    const snapshot = await get(child(ref(database), 'comments/' + id));
    let commentList = [];

    if (snapshot.exists()) {
      snapshot.forEach((item) => {
        commentList.push({
          id: item.key,
          ...item.val(),
        });
      });
    }
    return commentList;
  } catch (e) {
    return rejectWithValue(e?.message ?? defaultErrorMessage);
  }
});
