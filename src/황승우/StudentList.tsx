import { SelectAll } from "@mui/icons-material";
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
import { useEffect, useState } from "react";

export type StuProps = {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  classes?: string;
  isChecked?: boolean;
  setChange?: () => void;
};

const StudentList = ({
  id,
  name,
  email,
  phone,
  classes,
  isChecked,
  setChange,
}: StuProps) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const emailCheck =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  useEffect(() => {
    setEmailErr(!emailCheck.test(email ?? ""));
  }, [email]);

  const phoneCheck = /^(01[016789]{1})-[0-9]{3,4}-[0-9]{4}$/;
  useEffect(() => {
    setPhoneErr(!phoneCheck.test(phone ?? ""));
  }, [phone]);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailErr(!emailCheck.test(e.target.value));
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneErr(!phoneCheck.test(e.target.value));
  };

  return (
    <>
      <tr>
        <td>
          <Checkbox {...label} checked={isChecked} onChange={setChange} />
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
          <div className="flex">
            <div className="">
              <TextField
                required
                id="outlined-required"
                label="E-mail"
                value={email}
                onChange={handleChangeEmail}
                error={emailErr}
                helperText={
                  emailErr ? "올바른 이메일 형식으로 입력해주세요." : ""
                }
              />
            </div>
          </div>
        </td>
        <td>
          <div className="flex">
            <div className="">
              <TextField
                required
                id="outlined-required"
                label="전화번호"
                value={phone}
                onChange={handleChangePhone}
                error={phoneErr}
                helperText={
                  phoneErr
                    ? "올바른 전화번호 형식 또는 -을 추가해 입력해주세요."
                    : ""
                }
              />
            </div>
          </div>
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
