import { Dialog, DialogTitle } from "@mui/material";

import { IModal } from "../../IProjectTypes";

import ModalCardContent from "./CardForm";

export default function ModalWindow({ openModal, toggleModal }: IModal) {
  return (
    <Dialog open={openModal} onClose={toggleModal}>
      <DialogTitle>Add new card</DialogTitle>
      <ModalCardContent toggleModal={toggleModal}/>
    </Dialog>
  );
}
