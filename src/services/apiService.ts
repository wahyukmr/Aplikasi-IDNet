import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({baseUrl: '../assets/data'}),
  endpoints: builder => ({
    fetchUsers: builder.query<any[], void>({
      query: () => '/users',
    }),
    fetchPosts: builder.query<any[], void>({
      query: () => '/posts',
    }),
  }),
});

export const {useFetchUsersQuery, useFetchPostsQuery} = apiService;
