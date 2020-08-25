import React, { useState, lazy } from "react";
import BuyOrders from "./BuyOrders";
import { buyMarketOrderReq } from "../../axiosInstance/axiosInstance";
import BuyResultModal from "./BuyResultModal";

export default function BuyOrdersContainer() {
  const [open, setOpen] = useState(false);
  const [mId, setMid] = useState(" ");
  const [price, setPrice] = useState(0);
  const [volume, setVol] = useState(0);
  const handleClose = () => {
    setOpen(false);
  };
  const handleBuyOrderPlace = (e: any) => {
    e.preventDefault();
    let data = {
      buyPrice: e.currentTarget.elements.price?.value?.toString(),
    };
    console.log(data);
    buyMarketOrderReq
      .post("/", data)
      .then((res) => {
        console.log(res.data);
        setMid(res.data.mId);
        setPrice(res.data.price);
        setVol(res.data.volume);
        setOpen(true);
      })
      .catch((err) => {
        setMid(err.mId);
        setPrice(err.price);
        setVol(err.volume);
        setOpen(true);
        console.log(err);
      });
  };
  return (
    <>
      <BuyOrders handleBuyOrderPlace={handleBuyOrderPlace} />
      <BuyResultModal
        open={open}
        handleClose={handleClose}
        mId={mId}
        price={price}
        volume={volume}
      />
    </>
  );
}
