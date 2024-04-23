import Image from "next/image";
import React from "react";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./ReviewDetail.module.scss";
import { useWindowSize } from "../../logic/useDimension";

const ReviewDetail = () => {
  const { width } = useWindowSize();
  return (
    <section className={Style.review_detail}>
      <div className={Style.review_detail_auth}>
        <figure className={Style.review_detail_auth_fig}>
          <Image
            src={Assets.review_auth_image}
            layout="fill"
            objectFit="cover"
            alt="Author"
          />
        </figure>
        {width < 1200 ? (
          <div className={Style.author}>
            <div className="container-fluid">
              <h1 className="h2">JANE DOE</h1>
              <div className={Style.designation}>
                BA Marketing <span>Class of 2017</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={Style.review_detail_cnt}>
        <div className="container-fluid">
          {width >= 1200 ? (
            <>
              <h1 className="h2">JANE DOE</h1>
              <div className={Style.designation}>
                BA Marketing <span>Class of 2017</span>
              </div>
            </>
          ) : (
            ""
          )}

          <div className={Style.review_detail_cnt_paragraph}>
            <p>
              I joined Middlesex University Dubai in 2013 as a young, energetic
              kid with lots of ambition and a drive to constantly learn. I knew
              that my camera and the media sector in particular were my calling,
              but the wings to support my dream were brought to fruition by the
              team and professors at Middlesex University Dubai. Within my first
              year, I was attending photo expeditions with the Student
              Photography Club and also became an official photographer for the
              University – covering annual events, sports competitions and the
              youth festival among others. Little did I know that this would
              come to shape my future.{" "}
            </p>
            <p>
              As a student I was aware that photography, animation, comic art
              and writing were the things that gave me the most satisfaction –
              for me this was not work, it was fun and an outlet for my
              creativity. One of my dear friends who would accompany me on such
              exhibitions pushed me to send my work to National Geographic and I
              did – and never looked back! My work was met with critical acclaim
              and earned me the Hamdan Photography Award and the National
              Geographic Nature Photographer of 2012.
            </p>
            <p>
              After graduating and working for various companies as a digital
              marketing executive, I decided to embark on my own journey, set up
              my own company and become my own boss. It is hard work, not only
              are you responsible for yourself, but the work of your employees.
              This only makes the experience even more rewarding – after all,
              the company is my baby! I can say with certainty that both my
              undergraduate and postgraduate study with Middlesex aided me in
              understanding the core of a viable business opportunity and how to
              trust your gut instinct. All this was shaped through years of
              hands on experience and learning from professors who encouraged us
              to find solutions to problems.
            </p>
            <p>
              My digital marketing company, Catch Communicationsv specialising
              in film, marketing and production now has three studios in India
              and assignments across the globe, with new projects and a web
              animated series in the pipeline. Looking back, I can only say one
              thing – how can you ever know what will work and whether you will
              succeed if you don’t try? Understand that there is a chance to
              learn in every opportunity and that there is no success without
              failure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ReviewDetail;
