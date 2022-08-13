import React from "react";
import { useSelector } from "react-redux";
import { selectUserCoins } from "../app/slices/coinSlice";

const CoinBar = ({
  coin,
  handleClick,
  isSearch = false,
  handleUpdate,
  currency,
}) => {
  const userCoins = useSelector(selectUserCoins);
  const userC = userCoins.find((c) => c.ticker === coin.ticker);

  const content = isSearch ? (
    <div
      onClick={(e) => handleClick(coin)}
      className="w-11/12 bg-amber-200 grid justify-items-center items-center p-2 rounded-md cursor-pointer sm:w-96"
    >
      <p>{coin.ticker.toUpperCase()}</p>
    </div>
  ) : (
    <div className=" w-11/12 bg-amber-200 grid grid-cols-[1fr_1fr_3fr_1fr] justify-items-center items-center p-2 py-4 rounded-md relative sm:w-8/12 sm:grid-cols-4">
      <img
        src={coin.logo}
        alt={coin.ticker}
        className="w-8 h-8 sm:w-12 sm:h-12"
      ></img>
      <p className="font-semibold hidden sm:block">
        {coin.coin.toUpperCase()} ( {coin.ticker.toUpperCase()} )
      </p>
      <p className="font-semibold sm:hidden">{coin.ticker.toUpperCase()}</p>
      <p className="font-bold text-lg">
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: `${currency || "USD"}`,
        }).format(coin.prices[currency || "USD"] * userC.amount)}
      </p>
      <p className="font-semibold">{userC.amount}</p>
      <button
        onClick={(e) => handleClick(coin.ticker)}
        className="bg-red-500 w-5 h-5 rounded-full hover:scale-105 hover:shadow-sm hover:shadow-black absolute right-1 top-1 z-10"
      ></button>
      <button
        onClick={(e) => handleUpdate(userC)}
        className="bg-amber-400 w-5 h-5 rounded-full hover:scale-105 hover:shadow-sm hover:shadow-black absolute right-8 top-1 z-10"
      ></button>
    </div>
  );

  return content;
};

export default CoinBar;
