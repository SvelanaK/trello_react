import { IconButton, TextField, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

import { IEditForm } from "../../IProjectTypes";

export default function EditInputForm({
  inputValue,
  setValue,
  saveName,
  toggleEditInput,
}: IEditForm) {
  return (
    <div className="edit-input">
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Add name for columns"
        type="text"
        fullWidth
        variant="outlined"
        onChange={(event) => setValue(event.target.value)}
        value={inputValue}
        sx={{ width: "300px" }}
      />
      <div>
        <Button color="secondary" variant="contained" onClick={saveName}>
          Confirm
        </Button>
        <IconButton
          sx={{ ml: 2 }}
          color="primary"
          aria-label="escape"
          component="button"
          onClick={toggleEditInput}
        >
          <Close fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
