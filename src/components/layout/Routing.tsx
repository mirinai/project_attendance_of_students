import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "../organism/Login";
import Register from "../organism/Register";
import ClassContents from "../organism/ClassContents";
import Main from "../organism/Main";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/classcontent" element={<ClassContents />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
