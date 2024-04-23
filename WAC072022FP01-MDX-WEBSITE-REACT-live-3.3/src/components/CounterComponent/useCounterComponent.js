import React, { useState, useEffect, useRef } from "react";
const useCounterComponent = (value) => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter < value ? prevCounter + 1 : prevCounter));
          }, 100);
          setContentLoaded(true);

          return () => {
            clearInterval(interval);
            observer.disconnect();
          };
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatCounter = (value) => {
    return value < 10 ? `0${value}` : value;
  };
  return {
    counter,
    setCounter,
    counterRef,
    contentLoaded,
    setContentLoaded,
    formatCounter,
  };
};
export default useCounterComponent;
