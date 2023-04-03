import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../models/user';
import { ILoginUser } from '../../pages/login/types';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser, void>({
      query: (users) => ({
        url:'auth',
        data: users
      }),
    }),
    addUser: builder.mutation<{}, IUser>({
      query: (user) => ({
        url: '/auth/register',
        method: 'POST',
        body: user
      })
    }),
    loginUser: builder.mutation<{}, ILoginUser>({
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user
      })
    })
  })
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useLoginUserMutation
} = apiSlice;
