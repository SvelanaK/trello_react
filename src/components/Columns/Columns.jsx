import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./ThemeColumns";
import { setColumns } from "../../state/trelloActions";

import ColumnItem from "./ColumnItem";
import EditInputForm from "./EditInputForm";

function Columns() {
  const dispatch = useDispatch();
  const [inputValue, setValue] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const columnsArr = useSelector((state) => state.columnsArr);

  const updateState = () => {
    const localArr = JSON.parse(localStorage.getItem("columnsArr"));
    if (localArr) {
      dispatch(setColumns());
      localArr.forEach((item) => {
        dispatch(setColumns(item));
      });
    }
  };

  useEffect(() => {
    updateState();
  }, []);

  useEffect(() => {
    if (columnsArr.length) {
      localStorage.setItem("columnsArr", JSON.stringify(columnsArr));
    }
  }, [columnsArr]);

  const toggleAddInput = () => {
    setOpenInput(!openInput);
    setValue("");
  };

  const saveName = () => {
    if (inputValue) {
      dispatch(setColumns({ name: inputValue, id: Date.now() }));
      setOpenInput(false);
    }
  };

  return (
    <Stack direction="row" spacing={2} sx={{ p: 4 }} className="main-page">
      <ThemeProvider theme={theme}>
        {columnsArr.map((item) => (
          <Stack key={item.id}>
            <ColumnItem
              item={item}
              updateState={updateState}
            />
            <button className="add-card-btn">
              + Add new card
            </button>
          </Stack>
        ))}
        <div>
          {openInput ? (
            <EditInputForm
              inputValue={inputValue}
              setValue={setValue}
              saveName={saveName}
              toggleEditInput={toggleAddInput}
            />
          ) : (
            <button className="add-column-btn column" onClick={toggleAddInput}>
              + Add new column
            </button>
          )}
        </div>
      </ThemeProvider>
    </Stack>
  );
}

export default Columns;
