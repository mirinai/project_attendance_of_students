import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export type TutorProps = {
  id?: number;
  tutor_name?: string;
  tutor_phone?: string;
  tutor_email?: string;
  tutor_password?: number;
};

const ChangingInfo = ({
  id,
  tutor_name,
  tutor_phone,
  tutor_email,
  tutor_password,
}: TutorProps) => {
  /* tutor 데이터 수정란 */
  /* 원래 tutor 데이터 불러오기, update로 수정 쿼리문 생성*/

  const [tutorData, setTutorData] = useState<TutorProps>({
    id,
    tutor_name,
    tutor_phone,
    tutor_email,
    tutor_password,
  });

  const sampleTutor = () => {
    axios
      .post("http://localhost:3000", {
        sampleId: "elillicrap2@mtv.com",
        samplePassword: "1236",
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("password", res.data.password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const detailTutor = async () => {
    const response = await fetch("http://localhost:3001/tutor");
    const data = await response.json();
  };

  const updateButton = () => {
    alert("수정 완료 버튼 클릭");
  };

  return (
    <>
      <div className="content flex flex-col justify-center items-center w-full">
        <h1 className="">정보 수정</h1>
        <div className="border rounded-md">
          <div className="flex flex-row gap-10 justify-center w-fit m-11 items-center">
            <p>이름 수정</p>
            <TextField id="filled-basic" label="name" variant="filled" />
          </div>
          <div className="flex flex-row gap-10 justify-center w-fit m-11 items-center">
            <p>전화번호 수정</p>
            <TextField id="filled-basic" label="phone" variant="filled" />
          </div>
          <div className="flex flex-row gap-10 justify-center w-fit m-11 items-center">
            <p>이메일 수정</p>
            <TextField id="filled-basic" label="email" variant="filled" />
          </div>
          <div className="flex flex-row gap-10 justify-center w-fit m-11 items-center">
            <p>비밀번호 수정</p>
            <div className=" ">
              <TextField id="filled-basic" label="password" variant="filled" />
            </div>
          </div>
          <div className="flex flex-row gap-10 justify-center w-fit m-11 items-center">
            <p>비밀번호 확인</p>
            <TextField id="filled-basic" label="password" variant="filled" />
          </div>
          <div className="flex justify-center mb-3">
            <Button onClick={updateButton} variant="contained">
              수정 완료
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangingInfo;
