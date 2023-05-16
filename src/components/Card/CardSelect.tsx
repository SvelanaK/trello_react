import { Box, InputLabel, MenuItem, FormControl, FormHelperText } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { ISelect } from "../../IProjectTypes";

export default function CardSelect({ formError, taskComplexity, setTaskComplexity }: ISelect) {

  const handleChange = (event: SelectChangeEvent) => {
    setTaskComplexity(event.target.value as string);  
  };

  interface ISelectItem {
    value: number,
    text: number,
  }

  const selectArr: ISelectItem[] = [
    { value: 1, text: 1 },
    { value: 2, text: 2 },
    { value: 3, text: 3 },
    { value: 4, text: 4 },
    { value: 5, text: 5 },
    { value: 6, text: 6 },
    { value: 7, text: 7 },
    { value: 8, text: 8 },
    { value: 9, text: 9 },
    { value: 10, text: 10 }
  ];

  return (
    <Box sx={{ mt:2 }}>
      <FormControl fullWidth error={formError}>
        <InputLabel id="demo-simple-select-label">Task Complexity</InputLabel>
        <Select
          sx={{ width: "100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={taskComplexity}
          label="taskComplexity"
          onChange={handleChange}
        >
          {selectArr.map((item) => (
            <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
          ))}
        </Select>
        {formError && <FormHelperText>Empty field</FormHelperText> }
      </FormControl>
    </Box>
  );
}
