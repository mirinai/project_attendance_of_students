import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "../organism/Login";
import Register from "../organism/Register";
import ClassContents from "../organism/CourseContents";
import Attendance from "../organism/Attendance";
import Main from "../organism/Main";
import StudentList from "../../황승우/StudentList";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/main" element={<Main />}></Route>
          <Route path="/attendance" element={<Attendance />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/classcontent" element={<ClassContents />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
