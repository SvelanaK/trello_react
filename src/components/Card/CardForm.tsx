import { useState, FormEvent } from "react";

import {
  Button,
  TextField,
  DialogActions,
  DialogContent,
  FormLabel,
  Stack,
  Box,
} from "@mui/material";

import { IModal, Istate, ICard } from "../../IProjectTypes";

import CardSelect from "./CardSelect";
import { useSelector } from "react-redux";

export default function ModalCardContent({ toggleModal }: IModal) {
  const [taskComplexity, setTaskComplexity] = useState("");
  const [invalidInputs, setInvalidInputs] = useState([]);
  const { currentColumnId, columnsArr } = useSelector((state: Istate) => state);

  const inputsArray = [
    { name: "nameColumns", label: "Name for card" },
    { name: "nameAuthor", label: "Author" },
    { name: "performing", label: "Performing" },
  ];

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const cardForm: ICard = {
      nameColumns: String(formData.get("nameColumns")),
      nameAuthor: String(formData.get("nameAuthor")),
      performing: String(formData.get("performing")),
      hours: Number(formData.get("hours")),
      taskComplexity,
    };

    const keys = Object.keys(cardForm);
    const emptyInputs: string[] = keys.filter((key) => {
      if (key === "hours" && (cardForm[key] > 100 || cardForm[key] <= 0))
        return true;
      if (key !== "hours" && String(cardForm[key as keyof ICard]).trim() === "")
        return true;
    });

    setInvalidInputs(emptyInputs);

    if (!emptyInputs.length) {
      toggleModal(event);
      const finedColumn = columnsArr.find((item) => item.id === currentColumnId);
      const indexCard = finedColumn.cardsArr.length;
      const card = { cardForm, columnId: currentColumnId, cardId: indexCard };
      finedColumn.cardsArr.push(card);
      localStorage.setItem("columnsArr", JSON.stringify(columnsArr));
    }
  };

  return (
    <form onSubmit={submitForm}>
      <DialogContent>
        {inputsArray.map((item) => (
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
        <Stack direction="row" alignItems="center" sx={{ mt: 1, justifyContent: "space-between"}}>
          <TextField
            className="hours-input"
            error={invalidInputs.includes("hours")}
            helperText={invalidInputs.includes("hours") && "Invalid field"}
            id="outlined-number"
            label="Hours"
            name="hours"
            key="hours"
            type="number"
          />
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ whiteSpace: "nowrap", pr: 1 }}
          >
            Expiration date
          </FormLabel>

        </Stack>
        <CardSelect
          formError={invalidInputs.includes("taskComplexity")}
          taskComplexity={taskComplexity}
          setTaskComplexity={setTaskComplexity}
        />
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={toggleModal}>Cancel</Button>
        <Button variant="contained" type="submit">
          Confirm
        </Button>
      </DialogActions>
    </form>
  );
}
