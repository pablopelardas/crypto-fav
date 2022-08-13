import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  userCoins: [],
  fetched: false,
};

localStorage.getItem("userCoins")
  ? (initialState.userCoins = JSON.parse(localStorage.getItem("userCoins")))
  : null;

//  localStorage.setItem("dataUser002", JSON.stringify({firstName, lastName, email, image, roleId}))
export const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coins = [...state.coins, { ...action.payload }];
    },
    removeCoins: (state, action) => {
      state.coins = [];
    },
    setFetched: (state, action) => {
      state.fetched = action.payload;
    },
    addCoin: (state, action) => {
      const coins = localStorage.getItem("userCoins")
        ? JSON.parse(localStorage.getItem("userCoins"))
        : [];
      const inLocal = coins.find(
        (coin) => coin.ticker === action.payload.ticker
      );
      if (!inLocal) {
        coins.push(action.payload);
        localStorage.setItem("userCoins", JSON.stringify(coins));
        state.userCoins = [...state.userCoins, { ...action.payload }];
      } else {
        alert("Coin already added");
      }
    },
    removeCoin: (state, action) => {
      const coins = localStorage.getItem("userCoins")
        ? JSON.parse(localStorage.getItem("userCoins"))
        : [];
      const inLocal = coins.find((coin) => coin.ticker === action.payload);
      if (inLocal) {
        coins.splice(coins.indexOf(inLocal), 1);
        localStorage.setItem("userCoins", JSON.stringify(coins));
        state.userCoins = state.userCoins.filter(
          (coin) => coin.ticker !== action.payload
        );
        state.coins = state.coins.filter(
          (coin) => coin.ticker !== action.payload
        );
      }
    },
    updateCoin: (state, action) => {
      const coins = localStorage.getItem("userCoins")
        ? JSON.parse(localStorage.getItem("userCoins"))
        : [];
      const inLocal = coins.find(
        (coin) => coin.ticker === action.payload.ticker
      );
      if (inLocal) {
        inLocal.amount = action.payload.amount;
        localStorage.setItem("userCoins", JSON.stringify(coins));
        state.userCoins = state.userCoins.map((coin) =>
          coin.ticker === action.payload.ticker ? { ...action.payload } : coin
        );
      }
    },
  },
});

export const {
  setCoins,
  addCoin,
  updateCoin,
  removeCoin,
  removeCoins,
  setFetched,
} = coinSlice.actions;

export const selectCoins = (state) => state.coin.coins;
export const selectUserCoins = (state) => state.coin.userCoins;
export const selectFetched = (state) => state.coin.fetched;

export default coinSlice.reducer;
