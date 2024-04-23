import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Style from "./CounterComponent.module.scss";
import useCounterComponent from "./useCounterComponent";

const CounterComponent = (props) => {
  const { counter, counterRef, contentLoaded, formatCounter } = useCounterComponent(
    props?.props?.data?.total_number
  );
  return (
    <section className={`${Style.counter_section} ${contentLoaded ? Style.loaded : ""}`}>
      <div className="container">
        <div className={Style.ttl_wrap}>
          <h2 className="title_sub">{props?.props?.data?.main_title} </h2>
          <h3 className={`${Style.title} title mb-0`}>{props?.props?.data?.title}</h3>
        </div>
        <div className={Style.counter_area}>
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-7">
              <div ref={counterRef} className={`${Style.counter} d-flex justify-content-center  `}>
                <div className={Style.counter_inner}>
                  <span>{formatCounter(counter)}</span>
                  <span className={Style.plus}>+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className={Style.text_wrap}>
                <p className="mb-0">{props?.props?.data?.description}</p>
              </div>
              <div className={Style.btn_wrap}>
              {props?.props?.data?.button?.title && (
                  <Link
                    href={props?.props?.data?.button?.url ||  ""}
                    target={props?.props?.data?.button?.target}
                  >
                    <a className="d-block">
                      <button className="btn btn-dark-border">
                        {props?.props?.data?.button?.title}
                      </button>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterComponent;
