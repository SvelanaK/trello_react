import { useState, FormEvent } from "react";

import { Button, TextField, DialogActions, DialogContent } from "@mui/material";

import { IModal, Istate, ICard } from "../../IProjectTypes";

import CardSelect from "./CardSelect";
import { useSelector } from "react-redux";

export default function ModalCardContent({ toggleModal }: IModal) {
  const [taskComplexity, setTaskComplexity] = useState("");
  const [invalidInputs, setInvalidInputs] = useState([]);
  const { currentColumnId, columnsArr } = useSelector((state: Istate) => state);

  const inputArray = [
    { name: "nameColumns", label: "Name for card" },
    { name: "nameAuthor", label: "Author name" },
    { name: "performing", label: "Performing" },
    { name: "runtime", label: "Runtime" },
  ];

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const cardForm: ICard = {
      nameColumns: formData.get("nameColumns") as string,
      nameAuthor: formData.get("nameAuthor") as string,
      performing: formData.get("performing") as string,
      runtime: formData.get("runtime") as string,
      taskComplexity,
    };

    const keys = Object.keys(cardForm);
    const emptyInputs: string[] = keys.filter((key) => cardForm[key] === "");
    setInvalidInputs(emptyInputs);

    if (!emptyInputs.length) {
      toggleModal(event);
      const finedColumn = columnsArr.find(
        (item) => item.id === currentColumnId
      );
      const indexCard = finedColumn.cardsArr.length;
      const card = { cardForm, columnId: currentColumnId, cardId: indexCard };
      finedColumn.cardsArr.push(card);
      localStorage.setItem("columnsArr", JSON.stringify(columnsArr));
    }
  };

  return (
    <form onSubmit={submitForm}>
      <DialogContent>
        {inputArray.map((item) => (
          <TextField
            error={invalidInputs.includes(item.name)}
            helperText={invalidInputs.includes(item.name) && "Empty field"}
            key={item.name}
            margin="dense"
            id={item.name}
            name={item.name}
            label={item.label}
            type="text"
            fullWidth
          />
        ))}
        <CardSelect
          formError={invalidInputs.includes("taskComplexity")}
          taskComplexity={taskComplexity}
          setTaskComplexity={setTaskComplexity}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleModal}>Cancel</Button>
        <Button variant="contained" type="submit">
          Confirm
        </Button>
      </DialogActions>
    </form>
  );
}
