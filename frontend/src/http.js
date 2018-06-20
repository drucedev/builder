import config from "./config.js";
import axios from 'axios';
import {startLoader, stopLoader} from "./actions/loader";
import {generateId} from "./utils";

export const http = axios.create({
  baseURL: config.backendUrl
});

export const registerInterceptors = (store) => {
  http.interceptors.request.use(startLoaderInterceptor(store)); // todo handle js error
  http.interceptors.response.use(stopLoaderInterceptor(store), stopLoaderInterceptor(store));
};

const startLoaderInterceptor = (store) => (config) => {
  const requestId = generateId();
  store.dispatch(startLoader(requestId));
  return {...config, requestId};
};

const stopLoaderInterceptor = (store) => (response) => {
  store.dispatch(stopLoader(response.config.requestId));
  return response;
};
