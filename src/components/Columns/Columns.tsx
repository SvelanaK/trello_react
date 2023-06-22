import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./ThemeColumns";
import { Istate, Icolumn } from "../../IProjectTypes";
import { setColumns, setCurrentColumnId } from "../../state/trelloActions";

import ColumnItem from "./ColumnItem";
import EditInputForm from "./EditInputForm";
import ModalWindow from "../Card/ModalWindow";
import CardItem from "../Card/CardItem";

function Columns() {
  const dispatch = useDispatch();
  const [inputValue, setValue] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { columnsArr } = useSelector((state: Istate) => state);

  const updateState = () => {
    const localArr = JSON.parse(localStorage.getItem("columnsArr"));
    if (localArr) {
      dispatch(setColumns());
      localArr.forEach((item: Icolumn) => {
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

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const selectColumn = (item: Icolumn) => {
    dispatch(setCurrentColumnId(item));
    toggleModal();
  };

  const saveName = () => {
    if (inputValue) {
      dispatch(setColumns({ cardsArr: [], name: inputValue, id: Date.now() }));
      setOpenInput(false);
    }
  };

  return (
    <Stack direction="row" spacing={2} sx={{ p: 4 }} className="main-page">
      <ThemeProvider theme={theme}>
        {columnsArr.map((item) => (
          <Stack key={item.id}>
            <ColumnItem item={item} updateState={updateState} />
            <TransitionGroup>
              {item.cardsArr?.map((card) => (
                <CSSTransition
                  key={card.cardId}
                  timeout={300}
                  classNames="listItem"
                >
                  <CardItem
                    updateState={updateState}
                    cardForm={card.cardForm}
                    cardId={card.cardId}
                    columnId={card.columnId}
                    key={card.cardId}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
            <button
              className="add-card-btn"
              onClick={(event) => selectColumn(item)}
            >
              + Add new card
            </button>
            <ModalWindow openModal={openModal} toggleModal={toggleModal} />
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
