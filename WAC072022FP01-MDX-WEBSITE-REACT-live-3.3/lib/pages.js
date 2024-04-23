import axios from "axios";
import {
  getNodeAxiosInstance,
  getPostAxiosInstance,
  getStrapiAxiosInstance,
  getStrapiFilterAxiosInstance,
  getStrapiPreviewAxiosInstance,
} from "../src/apis";

const PRODUCTION = process.env.APP_PRODUCTION;

const URL = PRODUCTION === true ? process.env.BASE_URL : process.env.BASE_URL_WEBC;

export const getPageContent = async (route) => {
  if (NodePaths.includes(`/${route}`)) {
    const api = await getNodeAxiosInstance();
    const res = await api.get(`/page/${route}`);
    const data = res.data;
    return data;
  } else {
    try {
      const api = await getStrapiAxiosInstance();
      const res = await api.get(`/${route}`);
      const data = res.data;
      return data;
    } catch (error) {
      return {
        data: {
          status: "Not Found",
          err: JSON.stringify(error),
        },
      };
    }
  }
};

export const postContent = async (url, obj) => {
  const api = await getPostAxiosInstance();
  try {
    const res = await api.post(`/${url}`, obj);
    const data = res.data;
    return { data, status: res.status };
  } catch (error) {
    return {
      data: {
        status: "Not Found",
        err: JSON.stringify(error),
      },
    };
  }
};

export const getFilterContent = async (route) => {
  try {
    const api = await getStrapiFilterAxiosInstance();
    const res = await api.get(`/${route}`);
    const data = res.data;
    return data;
  } catch (error) {
    return {
      data: {
        status: "Not Found",
        err: JSON.stringify(error),
      },
    };
  }
};

export const getPreviewPageContent = async (route) => {
  try {
    const api = await getStrapiPreviewAxiosInstance();
    const res = await api.get(`/${route}`);
    const data = res.data;
    return data;
  } catch (error) {
    return {
      data: {
        status: "Not Found",
        err: JSON.stringify(error),
      },
    };
  }
};

export const getLayout = async (route) => {
  const api = await getNodeAxiosInstance();
  let res;

  res = await axios.get(`${URL}/api/get-menus?url=${route}`);
  const data = res.data;
  return data;
};

export const getNewLayout = async (route) => {
  const api = await getNodeAxiosInstance();
  let res;

  res = await axios.get(`${URL}/api/get-menu-data?url=${route}`);
  const data = res.data;
  return data;
};



export const NodePaths = [
  // `/course-category-listing`,
  // `/course-category/law`,
  // `/course-detail/llb-honours-law`,
  // `/business-faculty`,
  // `/staff-detail/cedwyn-fernandes`,
  // `/diac-campus`,
  // `/alumni`,
  // `/generic-landing`,
  // `/sports`,
  // `/sports-detail/cricket`,
  // `/sports-detail/basketball`,
  // `/common-listing`,
  // `/business-partnerships`,
  // `/mdx-template`,
  // `/pakistan-afghanistan`,
  // `/africa`,
  // `/china-and-far-east`,
  // `/uk-and-europe`,
  // `/gcc`,
  // `/india-nepal-srilanka`,
  // `/israel`,
  // `/latin-america-es`,
  // `/latin-america-pt`,
  // `/row`,
  // `/russia-and-cis`,
  // `/news-details/details`,
  // `/event-details/details`,
  // `/sports-main`,
  // `/cie`,
  // `/isd`,
  // `/cihe`,
  // `/centre-for-supply-chain`,
  // `/cim-accredited`,
  // `/industry-partnerships`,
  // `/alumni/keep-in-touch`,
  // `/alumni/get-involved`,
  // `/alumni/benefits`,
  // `/alumni/careers`,
  // `/alumni/events-and-reunions`,
  // `/alumni/share-your-story`,
  // `/alumni/contact-us`,
  // `/alumni/study-uk-alumni-awards-2021`,
  // `/pakistan`,
  // `/africa`,
  // `/china`,
  // `/europe`,
  // `/india-nepal`,
  // `/israel`,
  // `/latin-america`,
  // `/latin`,
  // `/rest-of-the-world`,
  // `/russia`,
  // `/september-2022`,
  // `/september2022`,
  // `/september-2022-pg`,
  // `/team-mdx`,
  // `/research/souq-economics-center-for-economics-research`,
  // `/research/sprl`,
  // `/immersive-vrx-lab`,
  // `/robotechx-lab`,
  // `/insightsx-lab`,
  // `/january-2023`,
  // `/gym`,
  // `/mdx-experience`,
];
