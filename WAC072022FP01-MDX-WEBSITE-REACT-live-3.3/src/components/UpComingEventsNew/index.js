import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useLayoutEffect,
} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper";
import Dropdown from "react-bootstrap/Dropdown";
import Style from "./UpComingEventsNew.module.scss";
import EventCardNew from "../cards/EventCardNew";
import Icons from "../Layout/Icons";
import { getFilterContent } from "../../../lib/pages";
import useUpComingEventsNew from "./useUpComingEventsNew";

const UpComingEventsNew = ({ props }) => {
  const {
    events,
    prevRef,
    nextRef,
    endDate,
    selected,
    activeTab,
    startDate,
    disableButton,
    onChange,
    setSwiper,
    setEndDate,
    setSelected,
    handleSelect,
    setActiveTab,
    setStartDate,
    handleDateSelect,
    setDisableButton,
  } = useUpComingEventsNew(props);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className={`example-custom-input ${Style.datepicker_btn}`}
      onClick={onClick}
      ref={ref}
    >
      <span className={`d-flex align-items-center ${Style.datepicker_icon}`}>
        <Icons icon={"calendar"} size={20} />
      </span>
    </button>
  ));
  ExampleCustomInput.displayName = "ExampleCustomInput";

  /* Event Sider Slices */
  const [chunkSize, setchunkSize] = useState(6);
  const [eventChunks, setEventChunks] = useState();

  useLayoutEffect(() => {
    const chunkArray = (arr, size) =>
      Array.from({ length: Math.ceil(arr?.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );

    const handleResize = () => {
      const newSize =
        window.innerWidth < 1200 && window.innerWidth >= 768
          ? 4
          : window.innerWidth < 767.98
          ? 1
          : 6;
      setchunkSize(newSize);
      setEventChunks(chunkArray(events, newSize));
    };

    const initialResize = () => {
      if (typeof window !== "undefined") {
        handleResize(); // Initial setup based on window wsidths
        window.addEventListener("resize", handleResize);
      }
    };

    initialResize();

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [events]);

  return (
    <section
      className={`${Style.section} ${
        props?.data?.no_spacing?.all
          ? "no_space"
          : props?.data?.no_spacing?.top
          ? "no_space_top"
          : props?.data?.no_spacing?.bottom
          ? width < 992
            ? ""
            : "no_space_bottom"
          : ""
      }`}
      id={props?.data?.scrollID ? props?.data?.scrollID : "Upcoming Events"}
    >
      <div className="container">
        <div
          className={`d-flex flex-wrap align-items-center justify-content-between ${Style.section_head}`}
        >
          <h2 className="title title-sm mb-0">{props?.data?.title}</h2>
          <div className={`d-flex  ${Style.filter_date_wrap}`}>
            <div className={Style.category_label}>Event Category</div>
            <div className={Style.section_filter}>
              <Dropdown className={Style.dropdown}>
                <Dropdown.Toggle
                  variant={"filter"}
                  id="filter-button"
                  className="d-flex align-items-center justify-content-between"
                >
                  {selected}
                </Dropdown.Toggle>
                <Dropdown.Menu className={Style.dropdown_result}>
                  {props?.data?.filter?.result.map((item, index) => (
                    <Dropdown.Item
                      className={`${activeTab == item?.value ? "active" : ""} ${
                        Style.dropdown_item
                      }`}
                      key={item?.value}
                      onClick={() => {
                        handleSelect(item?.value),
                          setSelected(item?.label),
                          setActiveTab(item?.value);
                      }}
                    >
                      {item?.label} ({item?.count})
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ zIndex: "200" }}>
              <DatePicker
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={onChange}
                dateFormat="MM/dd/yyyy"
                minDate={new Date()}
                selectsRange={true}
                inline={false}
                customInput={<ExampleCustomInput />}
              />
            </div>

            {disableButton && (
              <button
                onClick={() => {
                  handleDateSelect(), setDisableButton(false);
                  setStartDate(), setEndDate();
                }}
                className={Style.reset_calendar}
              >
                Reset calendar
              </button>
            )}
          </div>
        </div>
        <div className={Style.section_body}>
          {events && (
            <div className={Style.swiper_wrapper}>
              <>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  modules={[Grid, Navigation]}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  onInit={setSwiper}
                  // breakpoints={{
                  //   0: {
                  //     slidesPerView: 1,
                  //     grid: {
                  //       rows: 2,
                  //       fill: "row",
                  //     },
                  //   },
                  //   768: {
                  //     slidesPerView: 1,
                  //     grid: {
                  //       rows: 2,
                  //       fill: "row",
                  //     },
                  //   },
                  //   992: {
                  //     slidesPerView: 2, // Change slidesPerView to 2
                  //     grid: {
                  //       rows: 1,
                  //       fill: "row",
                  //     },
                  //   },
                  //   1200: {
                  //     slidesPerView: 3,
                  //     grid: {
                  //       rows: 2,
                  //       fill: "row",
                  //     },
                  //   },
                  // }}
                  className={Style.swiper}
                >
                  {eventChunks?.length > 0 ? (
                    eventChunks.map((chunk, chunkIndex) => (
                      <SwiperSlide
                        key={chunkIndex}
                        className={Style.swiper_slide}
                      >
                        <div
                          className={`row row-cols-md-2 row-cols-xl-3 ${Style.slide_calender} `}
                        >
                          {chunk.map((event, eventIndex) => (
                            <div key={eventIndex}>
                              <EventCardNew props={event} />
                            </div>
                          ))}
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <p className={Style.no_data}>
                      <span>No results found</span>
                    </p>
                  )}
                </Swiper>
                <div className={Style.swiper_nav}>
                  <button
                    className={`${Style.swiper_nav_el} ${Style.swiper_nav_prev}`}
                    ref={prevRef}
                  >
                    <Icons icon="arrow-left-sharp-thin" size={40} />
                  </button>
                  <button
                    className={`${Style.swiper_nav_el} ${Style.swiper_nav_next}`}
                    ref={nextRef}
                  >
                    <Icons icon="arrow-right-sharp-thin" size={40} />
                  </button>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpComingEventsNew;
