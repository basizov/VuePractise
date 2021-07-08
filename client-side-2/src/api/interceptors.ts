import { AxiosInstance, AxiosRequestConfig } from "axios";

const setParams = (config: AxiosRequestConfig) => {
  const params = config.params || {};

  config.params = Object.assign(params, {
    // apiKey and etc
  });
  return (config);
}

const addRequestInterseptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use(setParams);
}

export default  addRequestInterseptors;
