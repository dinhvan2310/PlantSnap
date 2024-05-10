import axios from "axios";
import queryString from "query-string";

const httpRequests = axios.create({
  baseURL: 'http://3.112.229.134/api',
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

httpRequests.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

httpRequests.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default httpRequests;