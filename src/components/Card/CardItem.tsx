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

import { CardArrType } from "../../IProjectTypes";

export default function CardItem({ cardForm }: CardArrType) {
  return (
    <Card id="card">
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
          <Typography variant="subtitle2">
            Expiration date: {cardForm.runtime}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton color="info" aria-label="more" component="button">
            <Edit />
          </IconButton>
          <IconButton color="info" aria-label="more" component="button">
            <RemoveCircleOutline sx={{ ml: 2 }} />
          </IconButton>
        </CardActions>
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
