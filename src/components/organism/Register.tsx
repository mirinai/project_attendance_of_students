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
import AddIcon from "@mui/icons-material/Add";

const Register = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
      <div className="text-7xl text-center">학생 등록 페이지</div>
      <div>
        <Button variant="contained">등록하기</Button>
      </div>
      <div>
        <table className="border">
          <tr>
            <th>
              <Checkbox {...label} />
            </th>
            <th>학생명</th>
            <th>학번</th>
            <th>성별</th>
            <th>수강 수업</th>
            <th>
              <Fab size="small" color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </th>
          </tr>
          <tr>
            <td>
              <Checkbox {...label} />
            </td>
            <td>
              <TextField id="outlined-basic" label="이름" variant="outlined" />
            </td>
            <td>
              <TextField id="outlined-basic" label="학번" variant="outlined" />
            </td>
            <td>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </td>
            <td>
              <FormControl fullWidth>
                <NativeSelect
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
        </table>
      </div>
    </div>
  );
};

export default Register;
