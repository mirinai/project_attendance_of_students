import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Main = () => {
  return (
    <div className="w-full flex">
      <div className="w-full h-full bg-slate-600 text-white flex justify-center items-center">
        시간표나 넣을거 생각하기
      </div>
      <div className="w-fit h-fit p-1">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Main;
