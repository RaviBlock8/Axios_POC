import React from "react";
import { Box, TextField, Button, Paper } from "@material-ui/core";
import { styled } from "@material-ui/styles";
export default function BuyOrders({ handleBuyOrderPlace }: any) {
  return (
    <BuyBox elevation={2}>
      <h2>Buy Pool Order</h2>
      <form
        onSubmit={(e) => {
          handleBuyOrderPlace(e);
        }}
      >
        <Inputs label="Price of shares" name="price" variant="filled" />
        <br />
        <SubmitButton type="submit">Place Buy Market order</SubmitButton>
      </form>
    </BuyBox>
  );
}

const BuyBox = styled(Paper)(({ theme }) => ({
  width: "30vw",
  padding: "2%",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  fontSize: "18px",
  background: "#2979ff",
  color: "white",
  margin: "5px",
}));

const Inputs = styled(TextField)(({ theme }) => ({
  width: "100%",
  margin: "5px",
}));
