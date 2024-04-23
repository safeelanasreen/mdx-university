import LinkedinDetailItem from "../LinkedinDetailItem";
import Icons from "../Layout/Icons";
import LinkedinRelatedItems from "../LinkedinRelatedItems";
import Style from "./LinkedinDetailView.module.scss";
import ShareWithFriends from "./ShareWithFriends";
import { useRouter } from "next/router";

const LinkedinDetailView = ({ props, status }) => {
  const router = useRouter();

  return (
    <>
      <div className={`${Style.events_detail_wrap} mx-auto`}>
        <div className={`container ${Style.events_details_container}`}>
          <div className="row">
            <div className="col-xl-12">
              <div className={Style.main_sec_header}>
                <div className={Style.back_btn_wrap}>
                  <button
                    onClick={() => {
                      router.back();
                    }}
                    type="button"
                    className="btn btn-link"
                  >
                    <Icons icon="arrow-left-thin" size={13} /> Back
                  </button>
                </div>
                <ShareWithFriends className={"d-none d-md-flex"} props={props} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${Style.events_detail_main}`}>
          <div className="container">
            <LinkedinDetailItem props={props} status={status} />

            <div className={`d-md-none ${Style.main_sec_bottom}`}>
              <ShareWithFriends props={props} />
            </div>
          </div>
        </div>
      </div>
      {props ? (
        <div className={Style.related_sec}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <LinkedinRelatedItems props={props?.related_class} />
              </div>
            </div>
          </div>

          <div className={`w-100 text-center ${Style.pagination_wrap}`}>
            <a href={"/linkedin-learning"} className="btn btn-primary">
              View More
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LinkedinDetailView;
