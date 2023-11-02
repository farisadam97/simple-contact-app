import instance from "./config/axios";

export const loginApi = async (params) => {
  return instance.post(`/auth/login`, params);
};
