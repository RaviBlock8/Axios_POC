import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import QRow from "./QRow";
import { CentralState, Quotation } from "../../reducer/reducer";

interface props {
  quotations: Quotation[];
}

function QTable({ quotations }: props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Market order Id</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Volume of shares you will get</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quotations.map((quote) => {
            return <QRow quote={quote} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
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

export default connect(matchStateToProps, matchDispatchToProps)(QTable);
