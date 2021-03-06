import React from "react";
import SellOrdersContainer from "../SellOrders/SellOrders.container";
import BuyOrdersContainer from "../BuyOrders/BuyOrders.container";
import { Box } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import QTable from "../QTable/QTable";

export default function MainContainer() {
  return (
    <>
      <Main>
        <SellOrdersContainer />
        <BuyOrdersContainer />
      </Main>
    </>
  );
}

const Main = styled(Box)(({ theme }) => ({
  width: "90vw",
  margin: "10vh auto",
  display: "flex",
  justifyContent: "space-around",
}));
