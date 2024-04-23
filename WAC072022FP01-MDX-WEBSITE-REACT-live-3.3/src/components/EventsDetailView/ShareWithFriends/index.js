import React, { useState } from "react";
import Icons from "../../Layout/Icons";
import Style from "./ShareWithFriends.module.scss";
import {
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";

const ShareWithFriends = () => {
  const [copied, setCopied] = useState(false);
  return (
    <div className={Style.socialmedia_links_wrap}>
      <span>Share with Friends :</span>
      <a className={Style.socialmedia_links_item} href="#" target={"_blank"}>
        <TwitterShareButton url={`${typeof window !== "undefined"&&window.location.href}`}>
          <Icons icon="twitter" size={14} />
        </TwitterShareButton>
      </a>
      <a className={Style.socialmedia_links_item} href="#" target={"_blank"}>
        <FacebookShareButton url={`${typeof window !== "undefined"&&window.location.href}`}>
          <Icons icon="facebook" size={14} />
        </FacebookShareButton>
      </a>
      <a className={Style.socialmedia_links_item} href="#" target={"_blank"}>
        <LinkedinShareButton url={`${typeof window !== "undefined"&&window.location.href}`}>
          <Icons icon="linkedin" size={14} />
        </LinkedinShareButton>
      </a>
      {/* <a
        
        className={Style.socialmedia_links_item}
        href="#"
        target={"_blank"}
      >
        <Icons icon="snapchat" size={14} />
      </a> */}
      <a className={Style.socialmedia_links_item} href="#" target={"_blank"}>
        <WhatsappShareButton url={`${typeof window !== "undefined"&&window.location.href}`}>
          <Icons icon="whatsapp" size={14} />
        </WhatsappShareButton>
      </a>
      <a
        onClick={() =>{ navigator.clipboard.writeText(`${typeof window !== "undefined"&&window.location.href}`); setCopied(true) , setInterval(()=>{
          setCopied(false)
        }, 2000)}}
        className={`${Style.socialmedia_links_item} position-relative`}
      >
        <Icons icon="link-icon" size={14} />
        {copied ? <div className="url_copy">Copied</div> : ''}
      </a>
    </div>
  );
};

export default ShareWithFriends;
