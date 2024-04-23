import Style from "./CustomPagination.module.scss";
import Pagination from "react-bootstrap/Pagination";
import Icons from "../Layout/Icons";

const CustomPagination = ({ page, pages, setPage, handleClick }) => {
  return (
    <div className={`w-100 ${Style.custom_pagination_wrap}`}>
      <Pagination onClick={handleClick} className={Style.custom_pagination}>
        <Pagination.Prev
          onClick={() => {
            if (page > 1) setPage((state) => state - 1);
          }}
        >
          <Icons icon="arrow-left-thin" size={14} /> Previous
        </Pagination.Prev>

        {[...Array(pages)]?.map((d, i) => {
          return (
            <Pagination.Item key={i} onClick={() => setPage(i + 1)} active={page == i + 1}>
              {i + 1}
            </Pagination.Item>
          );
        })}
        <Pagination.Next
          onClick={() => {
            if (page < pages) setPage((state) => state + 1);
          }}
        >
          Next <Icons icon="arrow-right-sharp-md-thin" size={14} />
        </Pagination.Next>
      </Pagination>
    </div>
  );
};

export default CustomPagination;
