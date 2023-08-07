import instance from "./config/axios";

export const getContacts = async () => {
  return instance.get(`/contact`);
};

export const getContact = async (id) => {
  return instance.get(`/contact/${id}`);
};

export const postContact = async (params) => {
  return instance.post(`/contact`, params);
};

export const putContact = async (id, params) => {
  return instance.put(`/contact/${id}`, params);
};

export const deleteContact = async (id) => {
  return instance.delete(`/contact/${id}`);
};
