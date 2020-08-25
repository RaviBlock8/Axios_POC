import React, { useState } from "react";
import SellOrders from "./SellOrders";
import { sellLimitOrderReq } from "../../axiosInstance/axiosInstance";
import SellResultModal from "./SellResultModal";

export default function SellOrdersContainer() {
  const [open, setOpen] = useState(false);
  const [lId, setLid] = useState(" ");
  const [price, setPrice] = useState(0);
  const [availableVolume, setVol] = useState(0);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmitRequest = (e: any) => {
    e.preventDefault();
    let data = {
      price: e.currentTarget.elements.price?.value?.toString(),
      volume: e.currentTarget.elements.amount?.value?.toString(),
    };
    console.log(data);
    sellLimitOrderReq
      .post("/", data)
      .then((res) => {
        console.log(res.data);
        setLid(res.data.lId);
        setPrice(res.data.price);
        setVol(res.data.availableVolume);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <SellOrders handleSubmitRequest={handleSubmitRequest} />
      <SellResultModal
        open={open}
        handleClose={handleClose}
        lId={lId}
        price={price}
        availableVolume={availableVolume}
      />
    </>
  );
}
