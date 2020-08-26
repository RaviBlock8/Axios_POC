import React, { useState, lazy, useEffect } from "react";
import BuyOrders from "./BuyOrders";
import { buyMarketOrderReq } from "../../axiosInstance/axiosInstance";
import BuyResultModal from "./BuyResultModal";
import { Quotation, CentralState } from "../../reducer/reducer";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface props {
  quotations: Quotation[];
  setQuotation: any;
}

function BuyOrdersContainer({ quotations, setQuotation }: props) {
  const [open, setOpen] = useState(false);
  const [mId, setMid] = useState(" ");
  const [price, setPrice] = useState(0);
  const [volume, setVol] = useState(0);
  useEffect(() => {
    console.log(`state <quotations:${quotations}`);
  }, [quotations]);
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
        let quote: Quotation = {
          mId: res.data.mId,
          price: res.data.price,
          volume: res.data.volume,
        };
        setQuotation(quote);
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

const matchStateToProps = (state: CentralState) => {
  return {
    quotations: state.quotations,
  };
};
const matchDispatchToProps = (dispatch: Dispatch) => {
  return {
    setQuotation: (quote: Quotation) => {
      dispatch({ type: "SET_QUOTATION", quote: quote });
    },
  };
};
export default connect(
  matchStateToProps,
  matchDispatchToProps
)(BuyOrdersContainer);
