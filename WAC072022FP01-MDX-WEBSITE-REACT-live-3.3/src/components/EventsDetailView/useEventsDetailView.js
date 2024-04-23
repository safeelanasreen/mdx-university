import React, { useEffect, useRef, useState } from "react";
import moment from "moment";

const useEventsDetailView = (props) => {
  const [date, setDate] = useState();
  const [startingTime, setStartingTime] = useState();
  const [endingTime, setEndinTime] = useState();
  const [isReady, setIsReady] = useState(false);
  function convertDateFormat(inputDate) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dateParts = inputDate.split(" ");
    const month = months.indexOf(dateParts[0]) + 1;
    const day = parseInt(dateParts[1]);
    const year = parseInt(dateParts[2]);

    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    return formattedDate;
  }
  function convertTo24HourFormat(time12h) {
    const [hours, minutes] = time12h
      .replace(/[^\d:]/g, "")
      .split(":")
      .map(Number);
    const isPM = /PM/i.test(time12h);
    let hours24 = (hours % 12) + (isPM ? 12 : 0);
    hours24 = hours24?.toString().padStart(2, "0");
    return `${hours24}:${minutes?.toString().padStart(2, "0")}`;
  }
  const extractTimeAfterAMPM = (timeString) => {
    const timeParts = timeString?.split(/AM|PM/i);
    return timeParts?.length > 1 ? timeParts[1]?.trim() : null;
  };

  useEffect(() => {
    const convertAndSet = (time) => {
      const formattedTime = moment(time, "h:mm A")?.format("h:mm A")?.replace(/PM.*/i, "PM");
      const convertedTime = convertTo24HourFormat(formattedTime);
      return convertedTime;
    };
  
    const { data } = props.body;
  
    if (props?.body?.data?.time_string) {
      setDate(convertDateFormat(data?.date));
      setStartingTime(convertAndSet(data?.time_string));
      setEndinTime(convertAndSet(data?.end_time));
    } else {
      setDate(convertDateFormat(data?.date));
      setStartingTime(
        convertAndSet(moment(data?.time, "h:mm a")?.subtract({ hours: 1, minutes: 30 })?.format("LT"))
      );
      setEndinTime(convertAndSet(moment(data?.end_time, "h:mm a")?.subtract({ hours: 1, minutes: 30 })?.format("LT")));
    }
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const givenDate = new Date(date);
    if (date && startingTime && endingTime && currentDate < givenDate) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [date, startingTime, endingTime]);
  return {
    date,
    startingTime,
    endingTime,
    extractTimeAfterAMPM,
    isReady,
    setIsReady,
  };
};
export default useEventsDetailView;
