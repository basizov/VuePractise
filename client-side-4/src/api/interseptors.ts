import { AxiosInstance, AxiosRequestConfig } from "axios";

const setParams = (config: AxiosRequestConfig) => {
  const params = config.params || {};

  config.params = Object.assign(params, {
    // Neccessary params
  });
  return (config);
}

const addInterseptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use(setParams);
};

export default  addInterseptors;
