import Sidebar from "./Sidebar";
import Style from "./SidebarLayout.module.scss";
import { lazy } from "react";
// import SidebarPage from "../../SidebarPage";
const SidebarPage = lazy(() => import("../../SidebarPage"));

const SidebarLayout = ({ props }) => {
  return (
    <div className={Style.sidebar_layout_wrap}>
      <div className={Style.sidebar_wrap}>
        <Sidebar props={props} />
      </div>
      <div className={Style.main}>
        <SidebarPage props={props} />
      </div>
    </div>
  );
};

export default SidebarLayout;
