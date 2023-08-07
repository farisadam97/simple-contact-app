import instance from "./config/axios";

export const getContact = async () => {
  return instance.get("/contact");
};
