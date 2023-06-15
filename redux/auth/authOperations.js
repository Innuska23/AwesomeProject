import { auth } from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

const defaultErrorMessage = 'Something went wrong';

export const authSignIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      return { displayName: result._tokenResponse.displayName, email: result._tokenResponse.email };
    } catch (e) {
      return rejectWithValue(e?.message ?? defaultErrorMessage);
    }
  }
);

export const authSignUp = createAsyncThunk(
  'auth/signUp',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });

      return { displayName: auth.currentUser.displayName, email: auth.currentUser.email };
    } catch (e) {
      return rejectWithValue(e?.message ?? defaultErrorMessage);
    }
  }
);

export const authSignOut = createAsyncThunk('auth/signOut', async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
  } catch (e) {
    return rejectWithValue(e?.message ?? defaultErrorMessage);
  }
});
