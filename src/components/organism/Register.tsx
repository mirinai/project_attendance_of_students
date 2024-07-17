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
import { useState } from "react";
import StudentList, { StuProps } from "../../황승우/StudentList";
import AddButton from "../../황승우/AddButton";
import { queryByTestId } from "@testing-library/react";

const Register = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [id, setId] = useState<number>(0);
  const [addStu, setStu] = useState<StuProps[]>([]);

  const clickRegister = () => {
    alert("등록하기 버튼 클릭");
  };
  const registerButton = () => {
    const newStu = { id };
    setStu((prev) => [...prev, newStu]);
    setId((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
      <div className="text-7xl text-center">학생 등록 페이지</div>
      <div>
        <Button variant="contained" onClick={clickRegister}>
          등록하기
        </Button>
      </div>
      <div className="w-5/6">
        <table className="border w-full">
          <tr>
            <th>
              <Checkbox {...label} />
            </th>
            <th>학생명</th>
            <th>학번</th>
            <th>성별</th>
            <th>수강 수업</th>
            <th>
              <AddButton handleClick={registerButton} />
            </th>
          </tr>
          {/* 표 헤더 끝 추가 라인 */}

          {addStu.map((v, i) => (
            <StudentList key={v.id} {...v} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Register;
