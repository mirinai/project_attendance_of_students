import { Slider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ClassContents = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl text-center my-10">수업명</div>

      <div className="px-80 flex gap-10 mb-10">
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

      {/* 수강한 학생 정보 (삭제가능) */}
      <table className="w-full max-w-3xl h-fit px-28 py-10 flex flex-col items-center gap-5 border">
        <tr className="w-full flex justify-between">
          <th>이름</th>
          <th>성별</th>
          <th>삭제</th>
        </tr>

        <tr className="w-full flex justify-between">
          <td>ㅇㅇㅇ</td>
          <td>Femail</td>
          <td>
            <DeleteIcon />
          </td>
        </tr>

        <tr className="w-full flex justify-between">
          <td>ㅇㅇㅇ</td>
          <td>Mail</td>
          <td>
            <DeleteIcon />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ClassContents;
