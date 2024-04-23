import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const RequirementsTab = ({ props }) => {
  const tabData = props?.data ?? props;
  const parse = require("html-react-parser");
  return (
    <div className={`tab-requirement`}>
      <Tabs defaultActiveKey={0} transition={false} id="noanim-tab-example">
        {tabData?.map((data, index) => {
          return (
            <Tab eventKey={`${index}`} title={data?.title} key={index}>
              {parse(data?.content)}
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default RequirementsTab;
