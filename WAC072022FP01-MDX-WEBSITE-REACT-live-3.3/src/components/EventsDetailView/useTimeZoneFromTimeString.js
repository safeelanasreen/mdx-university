import { useState, useEffect } from "react";

const useTimeZoneFromTimeString = (afterAmPm) => {
  const [timeZone, setTimeZone] = useState(afterAmPm ? "":"Asia/Dubai");
  useEffect(() => {
    const getTimeZoneFromTimeString = (afterAmPm) => {
      switch (afterAmPm) {
        case "WAT":
          return "Africa/Lagos";
        case "EAT":
          return "Africa/Nairobi";
        case "AST":
          return "Asia/Bahrain";
        case "JST":
          return "Asia/Tokyo";
        case "GST":
          return "Asia/Dubai";
        default:
          return "Asia/Dubai";
      }
    };

    if (afterAmPm) {
      const timeZoneResult = getTimeZoneFromTimeString(afterAmPm);
      setTimeZone(timeZoneResult);
    }
  }, [afterAmPm]);

  return timeZone;
};

export default useTimeZoneFromTimeString;
