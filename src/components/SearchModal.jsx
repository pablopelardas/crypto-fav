import React from "react";
import coinList from "@/constants/coinList";
import CoinBar from "./CoinBar";

const SearchModal = ({ callback }) => {
  const [value, setValue] = React.useState("");
  const [searchList, setSearchList] = React.useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.length > 0) {
      setSearchList(
        coinList.filter(
          (coin) =>
            coin.ticker.includes(e.target.value.toLowerCase()) ||
            coin.coin.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setSearchList([]);
    }
  };

  return (
    <div
      className={`w-full mt-12 flex flex-col justify-center ${
        searchList.length ? "" : "pb-4"
      }`}
    >
      <h1 className="text-center text-2xl mb-2">Search your Cryptocurrency</h1>
      <input
        className="w-48 mx-auto bg-[#f59e0b] rounded-md text-center p-2 font-bold border-black border-[1px] focus:border-[1px]"
        value={value}
        onChange={handleChange}
      ></input>
      <div
        className={`${
          searchList.length ? "flex" : "hidden"
        } flex-col items-center gap-3 mt-5 bg-[#f59e0b] py-5 overflow-auto`}
      >
        {searchList?.map((coin, index) => (
          <CoinBar
            coin={coin}
            isSearch={true}
            handleClick={callback}
            key={`${coin.ticker}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchModal;
