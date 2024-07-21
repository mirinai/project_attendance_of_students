import { Button, ButtonGroup } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

export type StudentProps = {
  id?: number;
  name?: string;
  gender?: "Mail" | "Femail";
  attendance?: "출석" | "지각" | "결석";
  memo?: string;
};

const Attendance = () => {
  const [rows, setRows] = useState<StudentProps>({
    id: 1,
    name: "ㅇㅇㅇ",
    gender: "Mail",
    attendance: "출석",
    memo: "+",
  });

  const handleMemo = () => prompt("메모추가");
  const handleAtt = (v: string) => alert(`${v} 클릭`);

  const today = `${new Date().getMonth() + 1}월 ${new Date().getDate()}일`;

  return (
    <div className="w-full h-full py-10 flex flex-col gap-10 items-center">
      <div className="text-5xl">{today}</div>

      <table className="w-full max-w-5xl mx-auto">
        <tr className="py-3 border-b border-black grid grid-cols-5 justify-items-center items-center">
          <th>번호</th>
          <th>이름</th>
          <th>성별</th>
          <th>출석여부</th>
          <th>비고</th>
        </tr>

        <tr className="py-3 border-b border-black grid grid-cols-5 justify-items-center items-center">
          <td>{rows.id}</td>
          <td>{rows.name}</td>
          <td>{rows.gender}</td>
          <td>
            <button
              className="mx-1 p-3 border"
              onClick={() => handleAtt("출석")}
            >
              출석
            </button>
            <button
              className="mx-1 p-3 border"
              onClick={() => handleAtt("지각")}
            >
              지각
            </button>
            <button
              className="mx-1 p-3 border"
              onClick={() => handleAtt("결석")}
            >
              결석
            </button>
          </td>
          <td className="hover:cursor-pointer" onClick={handleMemo}>
            <AddCircleOutlineOutlinedIcon />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Attendance;
