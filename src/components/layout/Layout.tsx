import { Outlet } from "react-router-dom";
import SideNav from "../organism/SideNav";

const Layout = () => {
  return (
    <div className="w-full h-full flex">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default Layout;
