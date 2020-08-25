import React from "react";
import { Modal, Paper } from "@material-ui/core";
import { styled } from "@material-ui/styles";
interface props {
  open: boolean;
  handleClose: any;
  mId: string;
  price: number;
  volume: number;
}
export default function BuyResultModal({
  open,
  handleClose,
  mId,
  price,
  volume,
}: props) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ModalPaper>
        <h2>Market order ID:{mId}</h2>
        <h2>Price:{price}</h2>
        <h2>Volume of shares you will get for this price:{volume}</h2>
      </ModalPaper>
    </Modal>
  );
}

const ModalPaper = styled(Paper)(({ theme }) => ({
  width: "30vw",
  padding: "2%",
  margin: "30vh auto",
}));
