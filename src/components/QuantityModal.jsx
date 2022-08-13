import React from "react";

const QuantityModal = ({ callback, coin }) => {
  const [value, setValue] = React.useState(coin.amount || "");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`w-full mt-12 flex flex-col justify-center`}>
      <h1 className="text-center text-2xl mb-10">{coin.coin}</h1>
      <input
        placeholder={`Amount of ${coin.ticker.toUpperCase()}`}
        type="number"
        className="w-48 mx-auto bg-[#f59e0b] rounded-md text-center p-2 font-bold border-black border-[1px] focus:border-[1px] placeholder:text-[#0000009e]"
        value={value}
        onChange={handleChange}
      ></input>
      <button
        onClick={(e) =>
          callback({ ...coin, amount: !value || value < 0 ? "0" : value })
        }
        className="my-12 mx-auto bg-amber-900 text-amber-50 w-20 shadow-sm shadow-[#00000045] hover:scale-110 hover:shadow-lg hover:shadow-[#27272760]"
      >
        SAVE
      </button>
    </div>
  );
};

export default QuantityModal;
