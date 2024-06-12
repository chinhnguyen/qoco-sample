import {
  GetFlightsOptions,
  GetFlightsResponse,
  GetWorkPackagesOptions,
  GetWorkPackagesResponse,
} from "@qoco-sample/shared";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log(import.meta.env.VITE_API_URL);

export const restApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getFlights: builder.query<GetFlightsResponse, GetFlightsOptions>({
      query: (options) => ({
        url: `/flights`,
        params: options,
      }),
    }),

    getWorkspaces: builder.query<
      GetWorkPackagesResponse,
      GetWorkPackagesOptions
    >({
      query: (options) => ({
        url: `/work-packages`,
        params: options,
      }),
    }),
  }),
});

export const { useGetFlightsQuery, useGetWorkspacesQuery } = restApi;
