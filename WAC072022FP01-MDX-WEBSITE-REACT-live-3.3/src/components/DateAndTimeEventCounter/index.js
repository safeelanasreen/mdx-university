import React, { useState, useEffect } from "react";
import Style from "./DateAndTimeEventCounter.module.scss";
import Circle from "./Circle";

const DateAndTimeEventCounter = ({props}) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const targetDate = new Date(props?.data?.date)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);


  const [counter, setCounter] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());
  return (
    <section id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
    className={`${Style.section} ${
      props?.data?.no_spacing?.all
        ? "no_space"
        : props?.data?.no_spacing?.top
        ? "no_space_top"
        : props?.data?.no_spacing?.bottom
        ? "no_space_bottom"
        : ""
    }`}>
      <div className={`${
          props?.data?.container ? "container" : "container-fluid"
        } ${props?.data?.no_spacing?.x ? "px-0" : ""}`}>
        <div className={Style.section_head}>
          <h2 className={`text-center mb-0 ${Style.section_title}`}>{props?.data?.title}</h2>
        </div>
        <div className={`mx-auto ${Style.counter}`}>
          <div className="row row-cols-auto align-items-center justify-content-center flex-nowrap">
            <div>
              <div
                className={`d-flex align-items-center justify-content-center ${Style.counter_box}`}
              >
                <div className={Style.counter_round}>
                  <h3 className={Style.counter_count}>{countdown?.days?.toString().padStart(2, '0')}</h3>
                  <span>Days</span>
                </div>
                <div className={Style.counter_progress}>
                  <Circle perc={countdown?.days/365} className={Style.stroke} />
                </div>
              </div>
            </div>
            <div>
              <div
                className={`d-flex align-items-center justify-content-center ${Style.counter_box}`}
              >
                <div className={Style.counter_round}>
                  <h3 className={Style.counter_count}>{countdown?.hours?.toString().padStart(2, '0')}</h3>
                  <span>Hours</span>
                </div>
                <div className={Style.counter_progress}>
                  <Circle  perc={countdown?.hours/60} className={Style.stroke} />
                </div>
              </div>
            </div>
            <div>
              <div
                className={`d-flex align-items-center justify-content-center ${Style.counter_box}`}
              >
                <div className={Style.counter_round}>
                  <h3 className={Style.counter_count}>{countdown?.minutes?.toString().padStart(2, '0')}</h3>
                  <span>Minutes</span>
                </div>
                <div className={Style.counter_progress}>
                  <Circle  perc={countdown?.minutes/60} className={Style.stroke} />
                </div>
              </div>
            </div>
            <div>
              <div
                className={`d-flex align-items-center justify-content-center ${Style.counter_box}`}
              >
                <div className={Style.counter_round}>
                  <h3 className={Style.counter_count}>{countdown?.seconds?.toString().padStart(2, '0')}</h3>
                  <span>Sec</span>
                </div>
                <div className={Style.counter_progress}>
                  <Circle perc={countdown?.seconds/60} className={Style.stroke} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DateAndTimeEventCounter;
