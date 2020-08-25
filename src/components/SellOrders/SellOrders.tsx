import React from "react";
import { Box, TextField, Button, Paper } from "@material-ui/core";
import { styled } from "@material-ui/styles";

export default function SellOrders({ handleSubmitRequest }: any) {
  return (
    <SellBox elevation={2}>
      <h2>Sell Limit Order</h2>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmitRequest(e);
        }}
      >
        <Inputs label="Price of shares" name="price" variant="filled" />
        <br />
        <Inputs label="Amount of shares" name="amount" variant="filled" />
        <br />
        <SubmitButton type="submit">Place sell limit order</SubmitButton>
      </form>
    </SellBox>
  );
}

const SellBox = styled(Paper)(({ theme }) => ({
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
