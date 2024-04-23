import axios from "axios";
import { useRouter } from "next/router";
import { NodePaths } from "../../lib/pages";

const PRODUCTION = process.env.APP_PRODUCTION;

const URL = PRODUCTION === true ? process.env.BASE_URL : process.env.BASE_URL_WEBC;

export const getStrapiAxiosInstance = async () => {
  const instance = axios.create({
    baseURL: `${URL}/api/general`,
    headers: {
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const getStrapiFilterAxiosInstance = async () => {
  const instance = axios.create({
    baseURL: `${URL}/api`,
    headers: {
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const getStrapiPreviewAxiosInstance = async () => {
  const instance = axios.create({
    baseURL: `${URL}/api`,
    headers: {
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const getNodeAxiosInstance = async () => {
  const instance = axios.create({
    baseURL: `${URL}/api`,
    headers: {
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const getImageUrl = (path) => {

  if(path.startsWith("http://") || path.startsWith("https://") ){
    return path;
  }
  return `${URL}${path}`;
};

export const getPostAxiosInstance = async () => {
  const instance = axios.create({
    baseURL: `${URL}/api`,
    headers: {
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};
