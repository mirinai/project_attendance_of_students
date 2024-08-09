import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import PersonalTimetable from "../../양승언/PersonalTimetable";

const Main = () => {
  // const students = [
  //   {
  //     id: 1,
  //     name: "Fermi",
  //     subjects: [
  //       { name: "Analytical Mechanics", schedule: "Mon Wed 10:30-11:45" },
  //       { name: "Electromagnetics", schedule: "Tue Thu 15:00-16:15" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Yukawa",
  //     subjects: [
  //       { name: "Quamtum Physics", schedule: "Mon Wed 15:00-16:15" },
  //       { name: "Optics Experiment", schedule: "Fri 12:00-15:00" },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Gauss",
  //     subjects: [
  //       { name: "General Physics", schedule: "Tue Thu 10:30-12:00" },
  //       { name: "Calculus", schedule: "Mon Wed 13:30-15:00" },
  //     ],
  //   },
  // ];
  return (
    <div className="flex w-full">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col w-full p-2">
          <PersonalTimetable tutors={} />
        </div>
      </div>
      <div className="p-1 w-fit h-fit">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Main;
