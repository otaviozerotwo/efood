import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Dish from '../../models/Dish'

type CartState = {
  items: Dish[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
