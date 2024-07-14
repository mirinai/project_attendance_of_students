import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "../organism/Login";
import Register from "../organism/Register";
import ClassContents from "../organism/ClassContents";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/classcontent" element={<ClassContents />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
