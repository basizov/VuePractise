import { AxiosInstance, AxiosRequestConfig } from "axios";

const setParams = (config: AxiosRequestConfig) => {
  const params = config.params || {};

  config.params = Object.assign(params, {
    apikey: process.env.VUE_APP_API_KEY
  });
  return (config);
}

export default function(axios: AxiosInstance) {
  axios.interceptors.request.use(setParams);
}
