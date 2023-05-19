import { useSelector } from "react-redux";

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import { RemoveCircleOutline, Edit } from "@mui/icons-material";

import { CardProps, Istate } from "../../IProjectTypes";

import Timer from "../Timer";
import { SyntheticEvent, useMemo, useState } from "react";

export default function CardItem({ cardForm, cardId, columnId, updateState }: CardProps) {
  const [timerOver, setTimerOver] = useState(false);
  const { columnsArr } = useSelector((state: Istate) => state);
  
  const warningCard = useMemo(
    () => (timerOver ? "warning-card" : "card"),
    [timerOver]
  );
  
  const deleteCard = (event: SyntheticEvent) => {
    const finedColumn = columnsArr.find((element) => element.id == columnId);
    finedColumn.cardsArr = finedColumn.cardsArr.filter((element) => element.cardId !== cardId);    
    localStorage.setItem("columnsArr", JSON.stringify(columnsArr));
    updateState();
  };

  return (
    <Card id={warningCard}>
      <Stack direction="row" justifyContent="space-between">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardForm.nameColumns}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {cardForm.nameAuthor}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Performing: {cardForm.performing}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton color="info" aria-label="more" component="button">
            <Edit />
          </IconButton>
          <IconButton color="info" aria-label="more" component="button"  onClick={deleteCard}>
            <RemoveCircleOutline sx={{ ml: 2 }} />
          </IconButton>
        </CardActions>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="body2">Expiration date:</Typography>
        <Timer
          hours={cardForm.hours}
          timerOver={timerOver}
          setTimerOver={setTimerOver}
        />
      </Stack>
      <Stack
        sx={{ mt: 2 }}
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="subtitle2">Task complexity</Typography>
        <Chip label={cardForm.taskComplexity} id="chip" />
      </Stack>
    </Card>
  );
}
