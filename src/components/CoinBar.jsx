import React from "react";
import { useSelector } from "react-redux";
import { selectUserCoins } from "../app/slices/coinSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
        className="absolute right-1 top-1"
      >
        <FontAwesomeIcon className="hover:scale-110" icon={faTrash} />
      </button>
      <button
        onClick={(e) => handleUpdate(userC)}
        className="absolute right-8 top-1 "
      >
        <FontAwesomeIcon className="hover:scale-110" icon={faGear} />
      </button>
    </div>
  );

  return content;
};

export default CoinBar;
