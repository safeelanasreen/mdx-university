import Style from "./CourseBenefit.module.scss";

const CourseBenefit = ({ props }) => {
  return (
    <section
      id={props?.data?.scrollID ? props?.data?.scrollID : "none"}
      className={`${Style.mdx_course_benefits} ${props?.data?.benefits_list?"":'d-none'}`}
    >
      <div className="container-fluid">
      {props?.data?.title&&
      <>        
      <div className="col-lg-12">
          <h4 className="title_sub">{props?.data?.title_caption}</h4>
          <h2 className="title title-sm">{props?.data?.title}</h2>
        </div>

        <div className={`${Style.row} row row-cols-1 row-cols-sm-2  row-cols-md-3  row-cols-lg-3 row-cols-xl-4`}>
          {props?.data?.benefits_list?.map((item, index) => (
            <div key={item?.count_value + index.toString()}>
              <div className={Style.benefit_item}>
                <h5>{item?.count_value}</h5>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
        </>
        }
      </div>
    </section>
  );
};

export default CourseBenefit;
