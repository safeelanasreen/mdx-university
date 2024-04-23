import React from "react";
import CommonLayout from "../src/components/Layout/CommonLayout";
import ComponentFunc from "../src/components";
import { data } from "../src/constants/sidebarDemo";
import { useRouter } from "next/router";
import UpComingEventsNew from "../src/components/UpComingEventsNew";
import EventFilterNew from "../src/components/EventFilterNew";
import EventGalleryNew from "../src/components/EventGalleryNew";
import PublicationSuccess from "../src/components/PublicationSuccess";
const SidebarDemo = () => {
  const Router = useRouter();
  return (
    <>
    {/* <CommonLayout
      linksEnabled={
        Object.keys(data?.data).includes("links_enabled")
          ? data?.data?.links_enabled
          : "/aptech-2023" == Router.asPath
          ? false
          : true
      }
      props={data}
    >
      <main>
        {data?.data?.widgets?.map((block) => ComponentFunc(block))}
        <UpComingEventsNew />
        <EventFilterNew />
        <EventGalleryNew />
        <PublicationSuccess />
        </main>
    </CommonLayout> */}
    </>
  );
};

export default SidebarDemo;
