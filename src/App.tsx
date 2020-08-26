import React, { lazy, Suspense } from "react";
import "./App.css";
import Main from "./components/Main";
import SellOrdersContainer from "./components/SellOrders/SellOrders.container";
import BuyOrdersContainer from "./components/BuyOrders/BuyOrders.container";
import MainContainer from "./components/MainContainer/MainContainer";
// import QTable from "./components/QTable/QTable";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CentralState, Quotation } from "./reducer/reducer";
interface props {
  quotations: Quotation[];
}

const QTable = lazy(() => import("./components/QTable/QTable"));

const App = ({ quotations }: props) => {
  return (
    <div className="App">
      {/* <SellOrdersContainer />
      <BuyOrdersContainer /> */}
      <MainContainer />
      {quotations.length !== 0 ? (
        <Suspense fallback={<div>Loading...</div>}>
          <QTable />
        </Suspense>
      ) : null}
    </div>
  );
};

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

export default connect(matchStateToProps, matchDispatchToProps)(App);
