import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiTagTypes, DashboardMetrics, ExpenseByCategorySummary, NewProduct, Product, User } from './types';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  reducerPath: 'api',
  tagTypes: [ApiTagTypes.DASHBOARD_METRICS, ApiTagTypes.PRODUCTS, ApiTagTypes.USERS, ApiTagTypes.EXPENSES],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => '/dashboard',
      providesTags: [ApiTagTypes.DASHBOARD_METRICS],
    }),
    getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: '/products',
        params: search ? { search } : {}
      }),
      providesTags: [ApiTagTypes.PRODUCTS],
    }),
    createProduct: build.mutation<Product, NewProduct>({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct
      }),
      invalidatesTags: [ApiTagTypes.PRODUCTS]
    }),
    getUsers: build.query<User[], void>({
      query: () => '/users',
      providesTags: [ApiTagTypes.USERS],
    }),
    getExpenseByCategory: build.query<ExpenseByCategorySummary[], void>({
      query: () => '/expenses',
      providesTags: [ApiTagTypes.EXPENSES],
    }),
  }),
});

export const { useGetDashboardMetricsQuery, useGetProductsQuery, useCreateProductMutation, useGetUsersQuery, useGetExpenseByCategoryQuery } = api;
