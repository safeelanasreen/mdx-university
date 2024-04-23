import { useEffect, useState } from "react";
import { getFilterContent } from "../../../lib/pages";

export const useLinkedinCardStackWidget = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");
  const [offSet, setOffSet] = useState(0);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const getLocationData = async () => {
      setStatus("pending");

      await getFilterContent(`linkedin-courses-load-more?limit=6&offset=${offSet}`)
        .then((res) => {
          setData((state) => (count == 0 ? res?.data?.courses : [...state, ...res?.data?.courses]));
          setCount(res?.data?.total_count);
          setTimeout(() => {
            setStatus("success");
          }, 100);
        })
        .catch(() => {
          console.log("Errors");
        });
    };
    getLocationData();
  }, [offSet]);

  const handleLoadMore = () => {
    setOffSet(offSet + 6);
  };

  return { data, count, status, handleLoadMore };
};
