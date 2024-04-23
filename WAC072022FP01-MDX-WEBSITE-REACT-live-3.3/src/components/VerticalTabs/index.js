import Style from "./VerticalTabs.module.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import CourseTab from "../CourseTab";
import Icons from "../Layout/Icons";
import EventCard from "../cards/EventCard";
import { getImageUrl } from "../../apis";
// import Image from "next/image";

const VerticalTabs = (props) => {
  props = props?.props?.data ? props?.props?.data : props?.props;
  return (
    <Row>
      {props !== "" && (
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={props?.[0]?.title}
        >
          <Col lg={6}>
            <Nav
              variant="pills"
              className={`flex-column ${Style.vertical_nav}`}
            >
              {props?.map((data, index) => {
                return (
                  <>
                    {data?.title !== "" && (
                      <Nav.Item key={index}>
                        <Nav.Link
                          eventKey={data.title}
                          className={Style.nav_link}
                        >
                          <span className={Style.pr_30}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className={Style.nav_link_text}>
                            {data.title}
                          </span>
                          <Icons
                            icon={"arrow-right-sharp-sm-thin"}
                            size={14.5}
                          />
                        </Nav.Link>
                      </Nav.Item>
                    )}
                  </>
                );
              })}
            </Nav>
          </Col>
          <Col lg={6}>
            <Tab.Content>
              {props?.map((data, index) => {
                return (
                  <Tab.Pane key={index} eventKey={data.title}>
                    {data.title && (
                      <EventCard
                        image={
                          data?.img && data?.img !== ""
                            ? data?.img?.indexOf("://") === -1
                              ? getImageUrl(data?.img)
                              : data?.img
                            : ""
                        }
                        description={data?.description}
                        time={data?.date}
                        link={data?.link}
                        title={data?.title}
                      />
                    )}
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Tab.Container>
      )}
    </Row>
  );
};

export default VerticalTabs;
