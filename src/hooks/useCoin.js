import React from "react";
import { useDispatch } from "react-redux";
import {
  addCoin,
  updateCoin,
  removeCoin,
  removeCoins,
} from "../app/slices/coinSlice";

const useFetchCoins = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectingQuantity, setSelectingQuantity] = React.useState(false);
  const [selectedCoin, setSelectedCoin] = React.useState(null);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const dispatch = useDispatch();

  const handleCoinSelection = (coin) => {
    setSelectingQuantity(true);
    setSelectedCoin(coin);
  };
  const handleClose = () => {
    setShowModal(false);
    setSelectingQuantity(false);
    setSelectedCoin(null);
    setIsUpdating(false);
  };

  const handleOpen = () => setShowModal(true);

  const handleCoinModified = (coin) => {
    if (isUpdating) {
      dispatch(updateCoin(coin));
    } else {
      dispatch(
        addCoin({ coin: coin.coin, ticker: coin.ticker, amount: coin.amount })
      );
    }

    handleClose();
  };

  const handleCoinRemoved = (ticker) => {
    dispatch(removeCoin(ticker));
  };

  const openUpdateModal = (coin) => {
    setIsUpdating(true);
    setSelectingQuantity(true);
    setSelectedCoin(coin);
    handleOpen();
  };

  return {
    showModal,
    handleOpen,
    handleClose,
    openUpdateModal,
    handleCoinSelection,
    selectingQuantity,
    selectedCoin,
    handleCoinModified,
    handleCoinRemoved,
  };
};

export default useFetchCoins;
