import React, { useState, useEffect } from "react";
import { getFilterContent } from "../../../lib/pages";
import useDebounce from "./useDebounce";

const usePublicationSuccess = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [sorted, setSorted] = useState();
  const [searchterm, setSearchTerm] = useState();
  const [Offset, setOffset] = useState(0);
  const [data, setData] = useState(props?.data?.publications);
  const [totalcount, setTotalCount] = useState(props?.data?.total_count);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const handleItemClick = (item) => {
    setOffset(0);
    setSelectedDepartments((prevSelectedDepartments) => {
      const index = prevSelectedDepartments.indexOf(item.id);
      let updatedDepartments = [...prevSelectedDepartments];

      if (index === -1) {
        updatedDepartments = [...prevSelectedDepartments, item.id];
      } else {
        updatedDepartments.splice(index, 1);
      }
      fetchPublications(searchterm, sorted, updatedDepartments, 0);

      return updatedDepartments;
    });
  };

  const handleSort = (option) => {
    setSorted(option?.value);
    setOffset(0);
    fetchPublications(searchterm, option?.value, selectedDepartments, 0);
  };
  const debouncedSearchTerm = useDebounce(searchterm, 300);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setOffset(0);
    // fetchPublications(e?.target.value, sorted, selectedDepartments, 0);
  };
  const handleOffset = () => {
    setOffset((prevValue) => prevValue + 6);
    handleLoadmore(searchterm, sorted, selectedDepartments, Offset + 6);
  };

  //The Responsive Verison
  const handleRadioButton = (option) => {
    setSorted(option);
  };

  const handleResInput = (item) => {
    setOffset(0);
    setSelectedDepartments((prevSelectedDepartments) => {
      const index = prevSelectedDepartments.indexOf(item.id);
      let updatedDepartments = [...prevSelectedDepartments];

      if (index === -1) {
        updatedDepartments = [...prevSelectedDepartments, item.id];
      } else {
        updatedDepartments.splice(index, 1);
      }
      return updatedDepartments;
    });
  };

  const handleApplyForm = () => {
    fetchPublications(searchterm, sorted, selectedDepartments, 0);
    setShow(false);
  };
  const handleClearFilter = () => {
    setSelectedDepartments([]);
    setSorted();
    // fetchPublications(searchterm, sorted, selectedDepartments,0);
  };
  const fetchPublications = async (search, sort, selected, off) => {
    const response = await getFilterContent(
      `get-publications?limit=6&offset=${off}&search=${
        search ? `${search}` : ""
      }&sort_by=${sort ? `${sort}` : ""}${
        selected && selected.length > 0
          ? `&departments=${selected.join(",")}`
          : ""
      }`
    );

    setData(response?.publications);
    setTotalCount(response?.total_count);
  };
  const handleLoadmore = async (search, sort, selected, off) => {
    const response = await getFilterContent(
      `get-publications?limit=6&offset=${off}&search=${
        search ? `${search}` : ""
      }&sort_by=${sort ? `${sort}` : ""}${
        selected && selected.length > 0
          ? `&departments=${selected.join(",")}`
          : ""
      }`
    );
    const filteredData = response?.publications;
    setData((preValue) => [...preValue, ...filteredData]);
  };

  useEffect(() => {
    if (debouncedSearchTerm !== undefined) {
      fetchPublications(debouncedSearchTerm, sorted, selectedDepartments, 0);
    }
  }, [debouncedSearchTerm]);

  return {
    selectedOption,
    selectedDepartments,
    sorted,
    data,
    totalcount,
    show,
    handleItemClick,
    handleSort,
    handleInputChange,
    handleOffset,
    handleRadioButton,
    handleResInput,
    handleApplyForm,
    handleClearFilter,
    handleSelect,
    handleShow,
    handleClose,
  };
};
export default usePublicationSuccess;
