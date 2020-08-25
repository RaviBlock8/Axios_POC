import React from "react";
import "./App.css";
import Main from "./components/Main";
import SellOrdersContainer from "./components/SellOrders/SellOrders.container";
import BuyOrdersContainer from "./components/BuyOrders/BuyOrders.container";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      {/* <SellOrdersContainer />
      <BuyOrdersContainer /> */}
      <MainContainer />
    </div>
  );
}

export default App;
