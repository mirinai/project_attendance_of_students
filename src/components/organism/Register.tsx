import { Button, Checkbox } from "@mui/material";
import { useState } from "react";
import StudentList, { StuProps } from "../../황승우/StudentList";
import AddButton from "../../황승우/AddButton";
import CourseList from "../../황승우/CourseList";

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
<<<<<<< HEAD
    fetch("http://localhost:3001/student/register", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addStu),
    })
      .then((v) => v.json())
      .then(() => {
        alert("등록완료");
        console.log("등록완료 알럿직후");
      });

    console.log(JSON.stringify(addStu));
=======
    if (
      addStu.some(
        (v) =>
          !v.student_name ||
          !v.student_email ||
          !v.student_phone ||
          !v.course_id
      )
    ) {
      alert("학생을 등록하지 못했습니다. 등록란에 올바르게 작성해주세요.");
    } else {
      fetch("http://localhost:3001/student/register", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addStu),
      })
        .then((v) => v.json())
        .then(() => {
          alert("등록완료");
          console.log("등록완료 알럿직후");
        });

      console.log(JSON.stringify(addStu));
    }
>>>>>>> 5d93981e7b36c58c52e0837135d70da047f97f87
  };

  const registerButton = () => {
    const newStu = {
      id,
      student_name: "",
      student_email: "",
      student_phone: "",
<<<<<<< HEAD
      course_id: undefined,
=======
      course_id: "",
      course_name: "",
>>>>>>> 5d93981e7b36c58c52e0837135d70da047f97f87
    };
    setStu((prev) => {
      const updatedStu = [...prev, newStu];
      setHandleCheck((prev) => [...prev, false]);
      setId((prev) => prev + 1);
      return updatedStu;
    });
  };

  const updateStudent = (index: number, updatedStudent: StuProps) => {
    setStu((prev) => {
      const newStudents = [...prev];
      newStudents[index] = updatedStudent;
      return newStudents;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10">
      <div className="text-center text-7xl">학생 등록 페이지</div>
      <div>
        <Button variant="contained" onClick={clickRegister}>
          등록하기
        </Button>
      </div>
      <div className="w-5/6">
        <table className="w-full border">
          <thead>
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
          </thead>
          <tbody>
            {addStu.map((v, i) => (
              <StudentList
                key={v.id}
                isChecked={handleCheck[i]}
                setChange={() => handleCheckBox(i)}
                updateStudent={(updatedStudent) =>
                  updateStudent(i, updatedStudent)
                }
                {...v}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;
