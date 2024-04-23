import React from "react";
import Icons from "../Layout/Icons";
import Style from "./StyleGuide.module.scss";
import CourseCard from "../cards/CourseCard";
import EventItem from "../cards/EventItem";
import ExperienceCard from "../cards/ExperienceCard";
import FacilityCard from "../cards/FacilityCard";
import FacultyCard from "../cards/FacultyCard";
import NewsCard from "../cards/NewsCard";
import ProgramCard from "../cards/ProgramCard";
import RelatedCard from "../cards/RelatedCard";
import RequirementCard from "../cards/RequirementCard";

import {
  ourCoursesData,
  ourExperienceData,
  RequirementsWidgetData,
} from "../DummyData";
import Assets from "../Layout/CommonLayout/assets";
import { Accordion } from "react-bootstrap";
import ContactForm from "../ContactForm";

const StyleGuide = () => {
  const courseDatas = ourCoursesData[0];
  const experienceDatas = ourExperienceData[0];
  return (
    <section className={Style.styleguide}>
      <div className="container-fluid">
        <div className={Style.box}>
          <div className={Style.box_head_sm}>Usage of Icons</div>
          <div className={Style.box_code}>
            import Icons from &quot;../Layout/Icons&quot;;
            <br />
            .....
            <br />
            {'<Icons icon={"icon name here..."} size={30} />'}
          </div>
        </div>
        <div className={`${Style.box} ${Style.box_space_md}`}>
          <div className={Style.box_head}>Social Media Icons</div>
          <div className="row">
            <div className="col-2 my-4">
              facebook <br />
              <Icons icon={"facebook"} size={30} />
            </div>
            <div className="col-2 my-4">
              instagram <br />
              <Icons icon={"instagram"} size={30} />
            </div>
            <div className="col-2 my-4">
              linkedin <br />
              <Icons icon={"linkedin"} size={30} />
            </div>
            <div className="col-2 my-4">
              snapchat <br />
              <Icons icon={"snapchat"} size={30} />
            </div>
            <div className="col-2 my-4">
              twitter <br />
              <Icons icon={"twitter"} size={30} />
            </div>
            <div className="col-2 my-4">
              whatsapp <br />
              <Icons icon={"whatsapp"} size={30} />
            </div>
            <div className="col-2 my-4">
              youtube <br />
              <Icons icon={"youtube"} size={30} />
            </div>
            <div className="col-2 my-4">
              whatsapp <br />
              <Icons icon={"whatsapp"} size={30} />
            </div>
            <div className="col-2 my-4">
              whatsapp <br />
              <Icons icon={"whatsapp"} size={30} />
            </div>
          </div>
        </div>
        <div className={`${Style.box} ${Style.box_space_md}`}>
          <div className={Style.box_head}>Arrows</div>
          <div className="row">
            <div className="col-3 my-4">
              arrow-right <br />
              <Icons icon={"arrow-right"} size={30} />
            </div>
            <div className="col-3 my-4">
              arrow-left <br />
              <Icons icon={"arrow-left"} size={30} />
            </div>
            <div className="col-3 my-4">
              arrow-right-sharp-thin <br />
              <Icons icon={"arrow-right-sharp-thin"} size={30} />
            </div>
            <div className="col-3 my-4">
              arrow-left-sharp-thin <br />
              <Icons icon={"arrow-left-sharp-thin"} size={30} />
            </div>
            <div className="col-3 my-4">
              arrow-right-long <br />
              <Icons icon={"arrow-right-long"} size={30} />
            </div>
            <div className="col-3 my-4">
              arrow-left-long <br />
              <Icons icon={"arrow-left-long"} size={30} />
            </div>
            <div className="col-3 my-4">
              arrow-top-right-long <br />
              <Icons icon={"arrow-top-right-long"} size={30} />
            </div>
            <div className="col-3 my-4">
              arrow-right-sm-thin <br />
              <Icons icon={"arrow-right-sm-thin"} size={30} />
            </div>
            <div className="col-3 my-4">
              arrow-right-sharp-md-thin <br />
              <Icons icon={"arrow-right-sharp-md-thin"} size={30} />
            </div>
            <div className="col-3 my-4">
              arrrow-down-md-thin <br />
              <Icons icon={"arrrow-down-md-thin"} size={30} />
            </div>
          </div>
        </div>
        <div className={`${Style.box} ${Style.box_space_md}`}>
          <div className={Style.box_head}>Other Icons</div>
          <div className="row">
            <div className="col-2 my-4">
              search <br />
              <Icons icon={"search"} size={30} />
            </div>
            <div className="col-2 my-4">
              search-thin <br />
              <Icons icon={"search-thin"} size={30} />
            </div>
            <div className="col-2 my-4">
              globe <br />
              <Icons icon={"globe"} size={30} />
            </div>
            <div className="col-2 my-4">
              location <br />
              <Icons icon={"location"} size={30} />
            </div>
            <div className="col-2 my-4">
              location-thin <br />
              <Icons icon={"location-thin"} size={30} />
            </div>
            <div className="col-2 my-4">
              message <br />
              <Icons icon={"message"} size={30} />
            </div>
            <div className="col-2 my-4">
              hand <br />
              <Icons icon={"hand"} size={30} />
            </div>
            <div className="col-2 my-4">
              send <br />
              <Icons icon={"send"} size={30} />
            </div>
            <div className="col-2 my-4">
              home <br />
              <Icons icon={"home"} size={30} />
            </div>
            <div className="col-2 my-4">
              home-stroked <br />
              <Icons icon={"home-stroked"} size={30} />
            </div>
            <div className="col-2 my-4">
              courses <br />
              <Icons icon={"courses"} size={30} />
            </div>
            <div className="col-2 my-4">
              easy-acess <br />
              <Icons icon={"easy-acess"} size={30} />
            </div>
            <div className="col-2 my-4">
              tick-circle <br />
              <Icons icon={"tick-circle"} size={30} />
            </div>
            <div className="col-2 my-4">
              timer <br />
              <Icons icon={"timer"} size={30} />
            </div>
            <div className="col-2 my-4">
              flag <br />
              <Icons icon={"flag"} size={30} />
            </div>
            <div className="col-2 my-4">
              call-back <br />
              <Icons icon={"call-back"} size={30} />
            </div>

            <div className="col-2 my-4">
              consultation-thin <br />
              <Icons icon={"consultation-thin"} size={45} />
            </div>

            <div className="col-2 my-4">
              consultation <br />
              <Icons icon={"consultation"} size={45} />
            </div>

            <div className="col-2 my-4">
              people <br />
              <Icons icon={"people"} size={45} />
            </div>

            <div className="col-2 my-4">
              work-space <br />
              <Icons icon={"work-space"} size={45} />
            </div>
            <div className="col-2 my-4">
              workshop <br />
              <Icons icon={"workshop"} size={45} />
            </div>
          </div>
        </div>
        <div className={Style.box}>
          <div className={Style.box_head}>Buttons</div>
          <div className="row">
            <div className="col-4 my-4">
              <div className={Style.box_label}>
                <strong>.btn .btn-primary</strong>
              </div>
              <button className="btn btn-primary">Button primary</button>
            </div>
            <div className="col-4 my-4">
              <div className={Style.box_label}>
                <strong>.btn .btn-light</strong>
              </div>
              <button className="btn btn-light">Button light</button>
            </div>
            <div className="col-4 my-4">
              <div className={Style.box_label}>
                <strong>.btn .btn-link</strong>
              </div>
              <button className="btn btn-link">
                Arrow Link{" "}
                <span className="btn-link-icon">
                  <Icons icon={"arrow-right-long"} size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={Style.box}>
          <div className={`${Style.box_head} text-capitalize`}>
            Class Name for Titles
          </div>
          <div className="row">
            <div className="col-4 my-4">
              <div className={Style.box_label}>
                <strong>.title (60)</strong>
              </div>
              <h2 className="title">Title</h2>
            </div>
            <div className="col-4 my-4">
              <div className={Style.box_label}>
                <strong>.title .title-sm (45)</strong>
              </div>
              <h2 className="title title-sm">Title</h2>
            </div>
            <div className="col-4 my-4">
              <div className={Style.box_label}>
                <strong>.title .title_sub (20)</strong>
              </div>
              <h2 className="title title_sub">Title</h2>
            </div>
            <div className="col-12 my-4">
              <h1 className="h1">Headings 1 (60)</h1>
              <h2 className="h2">Headings 2 (45)</h2>
              <h3 className="h3">Headings 3 (40)</h3>
              <h4 className="h4">Headings 4 (35)</h4>
              <h5 className="h5">Headings 5 (30)</h5>
              <h6 className="h6">Headings 6 (25)</h6>
            </div>
          </div>
        </div>
        <div className={Style.box}>
          <div className={Style.box_head}>Cards</div>
          <div className="row">
            <div className="col-6">
              <div className={Style.box_code}>
                import CourseCard from &quot;../cards/CourseCard&quot;;
                <br />
                .....
                <br />
                {
                  "<CourseCard title={Card Title Here...} content={Card Content Here...} img={Card Icon Here ...} listing={true} />"
                }
              </div>
            </div>
            <div className="col-6">
              <div className={Style.box_code}>
                import CourseCard from &quot;../cards/CourseCard&quot;;
                <br />
                .....
                <br />
                {
                  "<CourseCard title={Card Title Here...} content={Card Content Here...} img={Card Icon Here ...} />"
                }
              </div>
            </div>
            <div className="col-6 mb-5 mt-2">
              <CourseCard
                title={courseDatas.title.toUpperCase()}
                content={courseDatas.content}
                img={courseDatas.icon}
                listing={true}
              />
            </div>
            <div className="col-6 mb-5 mt-2">
              <CourseCard
                title={courseDatas.title.toUpperCase()}
                content={courseDatas.content}
                img={courseDatas.icon}
              />
            </div>

            <div className="col-4">
              <div className={Style.box_code}>
                import RelatedCard from &quot;../cards/RelatedCard&quot;;
                <br />
                .....
                <br />
                {"<RelatedCard />"}
              </div>
            </div>
            <div className="col-4">
              <div className={Style.box_code}>
                import ExperienceCard from &quot;../cards/ExperienceCard&quot;;
                <br />
                .....
                <br />
                {
                  "<ExperienceCard title={Title Here} category={Category Here} img={Image Here} />"
                }
              </div>
            </div>
            <div className="col-4">
              <div className={Style.box_code}>
                import RequirementCard from
                &quot;../cards/RequirementCard&quot;;
                <br />
                .....
                <br />
                {"<RequirementCard />"}
              </div>
            </div>
            <div className="col-4 mb-5 mt-2">
              <RelatedCard title="Course" img={Assets.cover_campfire} link="" />
            </div>
            <div className="col-4 mb-5 mt-2">
              <ExperienceCard
                title={experienceDatas.title}
                category={experienceDatas.category}
                img={experienceDatas.img}
              />
            </div>
            <div className="col-4 mt-2">
              <RequirementCard props={RequirementsWidgetData.data.cards[0]} />
            </div>

            <div className="col-6">
              <div className={Style.box_code}>
                import FacilityCard from &quot;../cards/FacilityCard&quot;;
                <br />
                .....
                <br />
                {"<FacilityCard title={Title Here} img={Image Here} />"}
              </div>
            </div>
            <div className="col-6">
              <div className={Style.box_code}>
                import FacultyCard from &quot;../cards/FacultyCard&quot;;
                <br />
                .....
                <br />
                {"<FacultyCard />"}
              </div>
            </div>
            <div className="col-6 mb-4 mt-2">
              <FacilityCard
                title={experienceDatas.title}
                img={experienceDatas.img}
              />
            </div>
            <div className="col-6 mb-4 mt-2">
              <FacultyCard />
            </div>
            <div className="col-7">
              <div className={Style.box_code}>
                import NewsCard from &quot;../cards/NewsCard&quot;;
                <br />
                .....
                <br />
                {
                  "<NewsCard  title={Title Here} img={Image Here} date={20 Tuesday, June 2022} description={Description Here} />"
                }
              </div>
            </div>

            <div className="col-5">
              <div className={Style.box_code}>
                import EventItem from &quot;../cards/EventItem&quot;;
                <br />
                .....
                <br />
                {"<EventItem />"}
              </div>
            </div>
            <div className="col-7 mb-5 mt-2">
              <NewsCard
                title={"It was popularised in the 1960s with the release of.."}
                img={Assets.cover_course}
                date={"20 Tuesday, June 2022 "}
                description={
                  "It was popularised in the 1960s with the release of Letraset sheets  more including versions  section…More"
                }
              />
            </div>
            <div className="col-5 mb-5 mt-2">
              <EventItem />
            </div>
            <div className="col-12">
              <div className={Style.box_code}>
                import ProgramCard from &quot;../cards/ProgramCard&quot;;
                <br />
                .....
                <br />
                {"<ProgramCard />"}
              </div>
            </div>
            <div className="col-12 mb-5 mt-2">
              <ProgramCard />
            </div>
          </div>
        </div>
        <div className={Style.box}>
          <div className={Style.box_head}>Accordions</div>
          <div className="row">
            <div className="col-6">
              <div className={`${Style.box_code} h-auto`}>
                {'import { Accordion } from "react-bootstrap";'}
                <br />
                .....
                <br />
                {'<Accordion defaultActiveKey="0">'}
                <br />
                &nbsp;{'<Accordion.Item eventKey="0">'}
                <br />
                &nbsp;&nbsp;
                {"<Accordion.Header>Accordion Title</Accordion.Header>"}
                <br />
                &nbsp;&nbsp;
                {"<Accordion.Body>Accordion Content</Accordion.Body>"}
                <br />
                &nbsp;{'<Accordion.Item eventKey="0">'}
                <br />
                {'<Accordion defaultActiveKey="0">'}
              </div>
              <Accordion defaultActiveKey="0" className="mt-2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Title</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Title</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Title</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-6">
              <div className={`${Style.box_code} h-auto`}>
                {'import { Accordion } from "react-bootstrap";'}
                <br />
                .....
                <br />
                {'<Accordion defaultActiveKey="0"'}{" "}
                <span className="text-white">
                  className=&quot;accordion-dark&quot;
                </span>
                {">"}
                <br />
                &nbsp;{'<Accordion.Item eventKey="0">'}
                <br />
                &nbsp;&nbsp;
                {"<Accordion.Header>Accordion Title</Accordion.Header>"}
                <br />
                &nbsp;&nbsp;
                {"<Accordion.Body>Accordion Content</Accordion.Body>"}
                <br />
                &nbsp;{'<Accordion.Item eventKey="0">'}
                <br />
                {'<Accordion defaultActiveKey="0">'}
              </div>
              <Accordion
                defaultActiveKey="0"
                className="accordion-dark mt-2"
                style={{ backgroundColor: "#000", padding: "0 20px" }}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Title</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Title</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Title</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>

        <div className={Style.box}>
          <div className={Style.box_head}>Form</div>
          <div className={Style.box_code} style={{ height: "auto" }}>
            import ContactForm from &quot;../ContactForm&quot;;
            <br />
            .....
            <br />
            {"<ContactForm formTitle='Lorem Ipsum is dummy text' />"}
          </div>
          <div className="row mb-5 mt-2">
            <div className="col-md-6 col-lg-5">
              <ContactForm formTitle="Lorem Ipsum is dummy text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleGuide;
