import Cursor from "../../Cursor";
import Toolbar from "../../Toolbar";
import AlumniMenu from "./AlumniMenu";
import AlumniFooter from "./AlumniFooter";

const AlumniLayout = ({ children }) => {
  return (
    <>
      <AlumniMenu />
      {children}
      <AlumniFooter />
    </>
  );
};

export default AlumniLayout;
