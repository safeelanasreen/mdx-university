import React, { useEffect, useState } from "react";
import Icons from "../../Layout/Icons";
import Style from "./ShareWithFriends.module.scss";
import {
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";

const ShareWithFriends = ({ className, props }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    (function (d, s, id) {
      var js,
        sjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://sdk.snapkit.com/js/v1/create.js";
      sjs.parentNode.insertBefore(js, sjs);
    })(document, "script", "snapkit-creative-kit-sdk");
  }, []);

  return (
    <div className={`${className} ${Style.socialmedia_links_wrap}`}>
      <span>Share with Friends :</span>
      <a className={Style.socialmedia_links_item} href="#" target={"_blank"}>
        <TwitterShareButton url={`${typeof window !== "undefined" && window.location.href}`}>
          <Icons icon="twitter" size={30} />
        </TwitterShareButton>
      </a>
      <a className={Style.socialmedia_links_item} href="#" target={"_blank"}>
        <FacebookShareButton url={`${typeof window !== "undefined" && window.location.href}`}>
          <Icons icon="facebook" size={30} />
        </FacebookShareButton>
      </a>
      <a className={Style.socialmedia_links_item} href="#" target={"_blank"}>
        <LinkedinShareButton url={`${typeof window !== "undefined" && window.location.href}`}>
          <Icons icon="linkedin" size={30} />
        </LinkedinShareButton>
      </a>
      <a className={Style.socialmedia_links_item} href="#" target={"_blank"}>
        {/* <button>
          <Icons icon="snapchat" size={30} data-share-url="https://kit.snapchat.com/" />
        </button> */}

        <div
          className="snapchat-creative-kit-share"
          data-theme="light"
          data-size="small"
          data-text="false"
          data-share-url={`https://mdx.ac.ae/learning-courses?slug=${props?.data?.slug}`}
        ></div>
      </a>
      <a className={Style.socialmedia_links_item} href="#" target={"_blank"}>
        <WhatsappShareButton url={`${typeof window !== "undefined" && window.location.href}`}>
          <Icons icon="whatsapp" size={30} />
        </WhatsappShareButton>
      </a>
      <a
        onClick={() => {
          navigator.clipboard.writeText(`${typeof window !== "undefined" && window.location.href}`);
          setCopied(true),
            setInterval(() => {
              setCopied(false);
            }, 2000);
        }}
        className={`${Style.socialmedia_links_item} position-relative`}
      >
        <Icons icon="link-icon" size={30} />
        {copied ? <div className="url_copy">Copied</div> : ""}
      </a>
    </div>
  );
};

export default ShareWithFriends;
