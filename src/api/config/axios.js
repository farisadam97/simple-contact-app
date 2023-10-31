import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3112/api",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
