import Style from "./LinkedinDetailItem.module.scss";
import Image from "next/image";
import Icons from "../Layout/Icons";
import { getImageUrl } from "../../apis";
import Link from "next/link";

const LinkedinDetailItem = ({ props, status }) => {
  const parse = require("html-react-parser");

  return (
    <>
      {status === "pending" ? (
        <div className={Style.linkeindetail_shimmer}>
          <div className={Style.linkeindetail_shimmer_img}>
            <div className={Style.linkeindetail_shimmer_animate}></div>
          </div>
          <div className={Style.linkeindetail_shimmer_title}>
            <div className={Style.title_1}>
              <h1 className={`title ${Style.event_main_title} mb-0`}>FINDIng</h1>
            </div>
            <div className={Style.title_2}>
              <h1 className={`title ${Style.event_main_title} mb-0`}>FINDIng</h1>
            </div>
          </div>
          <div className={`${Style.linkeindetail_shimmer_name} ${Style.event_details_list}`}>
            <div className={Style.content}>
              <Icons icon="author" size={17} />
              <div className={Style.name}>{props?.data?.author}</div>
            </div>
            <div className={Style.linkeindetail_shimmer_animate}></div>
          </div>
          <div className={Style.linkeindetail_shimmer_body}>
            <div className={Style.event_details_body}>
              <p>paragraph</p>
              <p>paragraph</p>
              <p>paragraph</p>
              <p>paragraph</p>
              <p>paragraph</p>
              <p>paragraph</p>
            </div>
          </div>
          <div className={Style.linkeindetail_shimmer_body}>
            <div className={Style.event_details_body}>
              <p>paragraph</p>
              <p>paragraph</p>
              <p>paragraph</p>
              <p>paragraph</p>
              <p>paragraph</p>
              <p>paragraph</p>
            </div>
          </div>
          <div className={Style.linkeindetail_shimmer_btn}>
            <div className="btn btn-primary">{props?.data?.button?.text}</div>
            <div className={Style.linkeindetail_shimmer_animate}></div>
          </div>
        </div>
      ) : (
        <div className={Style.event_details}>
          {props?.data?.image ? (
            <div className={Style.image_wrap}>
              <Image
                layout="fill"
                objectFit="cover"
                src={getImageUrl(props?.data?.image)}
                alt={"course cover"}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="row mb-3 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className={`title ${Style.event_main_title} mb-0`}>{props?.data?.title}</h1>
            </div>
          </div>
          <div className={Style.event_details_row}>
            <ul className={Style.event_details_list}>
              {props?.data?.author && (
                <li>
                  <Icons icon="author" size={17} />
                  <div className={Style.name}>{props?.data?.author}</div>
                </li>
              )}
            </ul>
          </div>
          <div className={Style.event_details_body}>{parse(`${props?.data?.content}`)}</div>

          {props?.data?.button?.url && (
            <Link href={`${props?.data?.button?.url}`}>
              <div className="btn btn-primary">{props?.data?.button?.text}</div>
            </Link>
          )}
          {props?.data?.commonContent && (
            <div className={Style.event_details_body_bottom}>
              {parse(props?.data?.commonContent)}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LinkedinDetailItem;
