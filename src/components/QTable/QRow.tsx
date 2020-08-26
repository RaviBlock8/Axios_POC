import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import { Quotation } from "../../reducer/reducer";

interface props {
  quote: Quotation;
}

export default function QRow({ quote }: props) {
  return (
    <TableRow key={quote.mId}>
      <TableCell component="th" scope="row">
        {quote.mId}
      </TableCell>
      <TableCell align="right">{quote.price}</TableCell>
      <TableCell align="right">{quote.volume}</TableCell>
    </TableRow>
  );
}
