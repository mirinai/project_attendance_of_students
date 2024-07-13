import { Outlet } from "react-router-dom";
import SideNav from "../organism/SideNav";

const Layout = () => {
  return (
    <div className="w-full h-full flex gap-10">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default Layout;
