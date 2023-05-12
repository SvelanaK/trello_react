import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { MoreHoriz } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";

import { Item } from "./ThemeColumns";
import EditInputForm from "./EditInputForm";

export default function ColumnItem({ item, updateState }) {
  ColumnItem.propTypes = {
    item: PropTypes.object.isRequired,
    updateState: PropTypes.func.isRequired,
  };

  let columnsArr = useSelector((state) => state.columnsArr);
  const [openEditInput, setEditInput] = useState(false);
  const [inputValue, setValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const toggleEditInput = () => {
    setEditInput(!openEditInput);
    setValue(item.name);
    setAnchorEl(null);
  };

  const saveEditName = () => {
    if (inputValue) {
      const finedColumn = columnsArr.find((element) => element.name === item.name);
      finedColumn.name = inputValue;
      localStorage.setItem("columnsArr", JSON.stringify(columnsArr));
      setEditInput(false);
    }
  };

  const deleteColumn = (event) => {
    columnsArr = columnsArr.filter((element) => element.name !== item.name);
    localStorage.setItem("columnsArr", JSON.stringify(columnsArr));
    closeMenu(event);
    updateState();
  };

  return (
    <Item className="column">
      {openEditInput ? (
        <EditInputForm
          inputValue={inputValue}
          setValue={setValue}
          saveName={saveEditName}
          toggleEditInput={toggleEditInput}
        />
      ) : (
        <div className="header-column" onClick={toggleEditInput}>
          <div>{item.name}</div>
          <IconButton
            sx={{ ml: 2 }}
            color="info"
            aria-label="more"
            component="button"
            onClick={openMenu}
          >
            <MoreHoriz />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem onClick={deleteColumn}>Delete</MenuItem>
            <MenuItem onClick={toggleEditInput}>Edit name</MenuItem>
          </Menu>
        </div>
      )}
    </Item>
  );
}
