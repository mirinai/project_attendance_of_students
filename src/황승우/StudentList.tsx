import {
  Button,
  Checkbox,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  NativeSelect,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

export type StuProps = {
  id?: number;
  name?: string;
  studentNumber?: number;
  gender?: string;
  classes?: string;
  isChecked?: boolean;
  onChangeChecked?: () => void;
};

const StudentList = ({
  id,
  name,
  studentNumber,
  gender,
  classes,
  isChecked = false,
  onChangeChecked,
}: StuProps) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <tr>
        <td>
          <Checkbox
            value={id}
            {...label}
            checked={isChecked}
            onChange={onChangeChecked}
          />
        </td>
        <td>
          <TextField
            id="outlined-basic"
            label="이름"
            variant="outlined"
            value={name}
          />
        </td>
        <td>
          <TextField
            id="outlined-basic"
            label="학번"
            variant="outlined"
            value={studentNumber}
          />
        </td>
        <td>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={gender}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </td>
        <td>
          <FormControl fullWidth>
            <NativeSelect
              value={classes}
              defaultValue={"kor"}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={"math"}>수학</option>
              <option value={"science"}>과학</option>
              <option value={"eng"}>영어</option>
              <option value={"his"}>한국사</option>
              <option value={"kor"}>국어</option>
            </NativeSelect>
          </FormControl>
        </td>
      </tr>
    </>
  );
};

export default StudentList;
