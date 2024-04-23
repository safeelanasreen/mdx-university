import Link from "next/link";
import Icons from "../../Layout/Icons";
import Style from "./SocialIconList.module.scss" 
const SocialIconList =(props)=>{
return(
<li className={`${Style.contact_item} `}>
      
         <a className={Style.item_wrap} href={props?.props?.link ?? "#"} target={"_blank"} rel="noreferrer">
           <div
             className={`d-flex align-items-center justify-content-between ${Style.img_wrap}`}
           >
             <div className={Style.contact_item_img}>
               <Icons icon={props?.props?.social_icon_right} size={23} />
             </div>
             <p className="mb-0">{props?.props?.label_right}</p>
           </div>
 
       </a>
     </li>
)
}
export default SocialIconList;
