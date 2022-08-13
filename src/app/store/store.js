import { configureStore } from '@reduxjs/toolkit'
// import userReducer from '../slices/userSlice'
import coinReducer from '../slices/coinSlice'
// import uiReducer from '../slices/uiSlice'
import { cryptApiSlice } from '../api/cryptApiSlice'

export const store = configureStore({
  reducer: {
    [cryptApiSlice.reducerPath]: cryptApiSlice.reducer,
    coin: coinReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptApiSlice.middleware),
  devTools: true
})
