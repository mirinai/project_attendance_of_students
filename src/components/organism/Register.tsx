import { Button, Checkbox } from "@mui/material";

import { useState } from "react";
import StudentList, { StuProps } from "../../황승우/StudentList";
import AddButton from "../../황승우/AddButton";

export const Register = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [id, setId] = useState<number>(0);
  const [addStu, setStu] = useState<StuProps[]>([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [handleCheck, setHandleCheck] = useState<boolean[]>([]);

  function selectCheckAll() {
    setCheckedAll((prev) => !prev);
    const array = new Array(addStu.length).fill(!checkedAll);
    setHandleCheck(array);
  }

  const handleCheckBox = (position: number) => {
    const newCheckState = handleCheck.map((v, i) => (i === position ? !v : v));
    setHandleCheck(newCheckState);
    const checkedLen = newCheckState.filter(Boolean).length;
    setCheckedAll(checkedLen === newCheckState.length);
  };

  const clickRegister = () => {
    alert("등록하기 버튼 클릭");
    // DB 연결시 학생명, 학생 학번(key 값?), 성별(학생 구분 내용, 미확정), 수업하는 수강명 or 수강정보, 등록하는 교수의 정보
  };
  const registerButton = () => {
    const newStu = { id };
    setStu((prev) => [...prev, newStu]);
    setHandleCheck((prev) => [...prev, false]);
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
              <Checkbox
                {...label}
                checked={checkedAll}
                onClick={selectCheckAll}
              />
            </th>
            <th>학생명</th>
            <th>이메일</th>
            <th>전화번호</th>
            <th>수강 수업</th>
            <th>
              <AddButton handleClick={registerButton} />
            </th>
          </tr>
          {/* 표 헤더 끝 추가 라인 */}

          {addStu.map((v, i) => (
            <StudentList
              key={v.id}
              isChecked={handleCheck[i]}
              setChange={() => handleCheckBox(i)}
              {...v}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Register;
