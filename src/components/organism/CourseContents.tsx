import { Slider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type ClassContentsProps = {
  name?: string;
  gender?: "Mail" | "Femail";
  studentAttendance?: number;
  classTotal?: number;
};

const ClassContents = ({
  name = "OOO",
  gender = "Mail",
  studentAttendance = 1,
  classTotal = 10,
}: ClassContentsProps) => {
  const handleDelete = () => alert("삭제");

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl text-center my-10">수업명</div>

      <div className="px-80 flex gap-10">
        {/* 수업횟수 */}
        <div className="w-96 h-fit p-5 bg-slate-100">
          <div className="my-3 flex justify-between items-end">
            <div className="font-black text-2xl">수업진행률</div>
            <div className="text-sm">50%</div>
          </div>
          <Slider
            disabled
            size="small"
            defaultValue={50}
            aria-label="수업횟수"
          />
        </div>

        {/* 출석률 */}
        <div className="w-96 h-fit p-5 bg-slate-100">
          <div className="my-3 flex justify-between items-end">
            <div className="font-black text-2xl">학생 출석률</div>
            <div className="text-sm">80%</div>
          </div>
          <Slider disabled size="small" defaultValue={80} aria-label="출석률" />
        </div>
      </div>

      <a
        href="/attendance"
        className="w-fit h-fit px-8 py-2 my-10 bg-violet-400"
      >
        출석부
      </a>

      <div className="text-3xl text-center mb-5">수강한 학생 정보</div>
      <table className="w-full max-w-3xl h-fit px-28 py-10">
        <tr className="w-full my-4 border-b grid grid-cols-4 justify-items-center">
          <th>이름</th>
          <th>성별</th>
          <th>출석률</th>
          <th>삭제</th>
        </tr>

        <tr className="w-full my-4 border-b grid grid-cols-4 justify-items-center">
          <td>{name}</td>
          <td>{gender}</td>
          <td>
            {studentAttendance} / {classTotal}
          </td>
          <td className="hover:cursor-pointer" onClick={handleDelete}>
            <DeleteIcon />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ClassContents;
