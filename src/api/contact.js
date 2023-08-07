import instance from "./config/axios";

export const getContacts = async () => {
  return instance.get(`/contact`);
};

export const postContact = async (params) => {
  return instance.post(`/contact`, params);
};

export const deleteContact = async (id) => {
  return instance.delete(`/contact/${id}`);
};
