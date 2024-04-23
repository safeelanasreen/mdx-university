
import FormInput from "../ContactForm/FormInput";
import FormSelectBox from "../ContactForm/FormSelectBox";
import SelectDropdown from "../SelectDropdown";
import Style from "./BannerSearch.module.scss";

const BannerSearch = ({ props }) => {
 
  return (
    <div className={Style.banner_search_container}>
      <div className="row gx-5">
        <div className="col-lg-6">
          <FormInput label="Search events" />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className={`col ${Style.banner_search_location_sel}`}>
              {/* <FormSelectBox  options={["Location1", "Location2"]} /> */}


              <SelectDropdown label={"Location"} options={["Location1", "Location2","Location3"]} />


            </div>
            <div className={`col ${Style.banner_search_btn}`}>
              <button className="btn btn-primary">Search Events</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSearch;
