import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurant from '../models/Restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => ''
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantQuery } = api
export default api
