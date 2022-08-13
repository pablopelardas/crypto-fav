import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coins:[],
}

export const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload
    },
  }
})

export const { setCoins } = coinSlice.actions

export const selectCoinsList = (state) => state.coins


export default coinSlice.reducer
