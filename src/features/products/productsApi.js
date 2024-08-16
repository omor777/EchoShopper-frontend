import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ page = 1,search }) => ({
        url: "/products",
        params: { page,search },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
