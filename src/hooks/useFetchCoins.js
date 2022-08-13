import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetCoinsMutation } from "@/app/services/coinsApiSlice";
import { selectCoins, selectUserCoins } from "@/app/slices/coinSlice";
import { selectFetched, setFetched } from "../app/slices/coinSlice";
import { configureStore } from "@reduxjs/toolkit";

const useFetchCoins = () => {
  const [getCoins] = useGetCoinsMutation();
  const isFetched = useSelector(selectFetched);
  const coins = useSelector(selectCoins);
  const userCoins = useSelector(selectUserCoins);
  const dispatch = useDispatch();

  const fetch = () => {
    if (userCoins.length) {
      dispatch(setFetched(false));
      Promise.all(
        userCoins
          .filter((coin) => !coins.find((c) => c.ticker === coin.ticker))
          .map((coin) => getCoins(coin.ticker))
      ).then(() => dispatch(setFetched(true)));
    } else {
      dispatch(setFetched(true));
    }
  };

  useEffect(() => {
    fetch();
  }, [userCoins]);

  return {};
};

export default useFetchCoins;
