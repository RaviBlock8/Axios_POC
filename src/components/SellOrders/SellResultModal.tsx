import React from "react";
import { Modal, Paper } from "@material-ui/core";
import { styled } from "@material-ui/styles";
interface props {
  open: boolean;
  handleClose: any;
  lId: string;
  price: number;
  availableVolume: number;
}
export default function SellResultModal({
  open,
  handleClose,
  lId,
  price,
  availableVolume,
}: props) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ModalPaper>
        <h2>LID:{lId}</h2>
        <h2>Price:{price}</h2>
        <h2>Available Volume:{availableVolume}</h2>
      </ModalPaper>
    </Modal>
  );
}

const ModalPaper = styled(Paper)(({ theme }) => ({
  width: "30vw",
  padding: "2%",
  margin: "30vh auto",
}));
