import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authServices = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "login",
        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: loginInfo,
      }),
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation, useLoginUserMutation } =
  authServices;
export default authServices;
