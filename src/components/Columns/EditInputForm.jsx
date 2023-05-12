import PropTypes from "prop-types";

import { IconButton, TextField, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function EditInputForm({
  inputValue,
  setValue,
  saveName,
  toggleEditInput,
}) {
  EditInputForm.propTypes = {
    setValue: PropTypes.func.isRequired,
    saveName: PropTypes.func.isRequired,
    toggleEditInput: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
  };

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
