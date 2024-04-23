import { useState } from "react";
import { useWindowSize } from "../../logic/useDimension";

const useImageHoverComponent = () => {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleSelect = (datas) => {
    setData(datas);
  };
  return {
    width,
    show,
    setShow,
    handleClose,
    handleShow,
    handleSelect,
    data,
    setData,
  };
};
export default useImageHoverComponent;
