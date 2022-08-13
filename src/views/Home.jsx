import React from "react";
import { useSelector } from "react-redux";
import { selectCoins, selectFetched } from "@/app/slices/coinSlice";

import CoinBar from "@/components/CoinBar";
import Modal from "@/components/Modal";
import SearchModal from "@/components/SearchModal";
import QuantityModal from "@/components/QuantityModal";
import Loader from "@/components/Loader";

import useFetchCoins from "@/hooks/useFetchCoins";
import useCoin from "@/hooks/useCoin";

import currencies from "@/constants/currencies";

const Home = () => {
  useFetchCoins();
  const {
    showModal,
    handleClose,
    handleOpen,
    openUpdateModal,
    handleCoinSelection,
    selectingQuantity,
    selectedCoin,
    handleCoinModified,
    handleCoinRemoved,
  } = useCoin();
  const [currency, setCurrency] = React.useState(currencies[1]);

  const handleSelectCurrency = (e) => {
    if (currencies.includes(e.target.value)) {
      setCurrency(e.target.value);
    } else setCurrency(currencies[0]);
  };

  const coins = useSelector(selectCoins);
  const isFetched = useSelector(selectFetched);
  const content = !isFetched ? (
    <Loader />
  ) : (
    <div className="flex items-center flex-col gap-3 overflow-scroll h-64 mb-32 xl:h-auto xl:overflow-hidden">
      {coins?.map((coin) => (
        <CoinBar
          coin={coin}
          handleClick={handleCoinRemoved}
          key={coin.ticker}
          handleUpdate={openUpdateModal}
          currency={currency}
        />
      ))}
    </div>
  );
  return (
    <section className="flex justify-center items-center h-[calc(100vh-6rem)]">
      <div className="relative bg-amber-800 w-11/12 min-h-[60%] shadow-2xl shadow-black 2xl:w-8/12">
        <h1 className="text-white text-2xl font-bold bg-amber-900 w-8/12 m-auto relative top-[-50px] text-center py-6 shadow-lg shadow-[#00000045] sm:text-4xl">
          Your favorite Cryptocurrencies
        </h1>
        {content}
        <button
          className="bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center absolute bottom-10 right-10 shadow-sm shadow-[#00000045] hover:scale-110 hover:shadow-lg hover:shadow-[#27272760]"
          onClick={handleOpen}
        >
          <p className="text-white font-black text-6xl relative top-[-7px]">
            +
          </p>
        </button>
        <input
          className="bg-amber-100 absolute bottom-14 left-10 w-24 text-center"
          list="currencies"
          placeholder="USD"
          onChange={handleSelectCurrency}
        ></input>
        <datalist id="currencies">
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </datalist>
      </div>
      <Modal show={showModal} handleClose={handleClose}>
        {selectingQuantity ? (
          <QuantityModal callback={handleCoinModified} coin={selectedCoin} />
        ) : (
          <SearchModal callback={handleCoinSelection} />
        )}
      </Modal>
    </section>
  );
};

export default Home;
