import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../models/user';

interface IUserState {
  user: IUser[];
  isLoading: boolean;
  isSuccess: boolean,
  isError: boolean,
  errorMessage: "",
}

const initialState: IUserState = {
  user: [],
  isLoading: false,
  isSuccess: true,
  isError: false,
  errorMessage: ''
}

export const registerUserSlice = createSlice({
  name: 'register_user',
  initialState,
  reducers: {
    // SET_REGISTER_USER(state, action) {
    //   state.name = action.payload
    // }
  }
});

//export const { SET_REGISTER_USER } = registerUserSlice.actions;

export const registerUserSelector = (state: any) => state.register_user;
