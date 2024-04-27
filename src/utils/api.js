import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://662c160cde35f91de15a6c0d.mockapi.io/",
});

export const apiGetContacts = async () => {
  const contacts = await axiosInstance.get(`/contacts`);
  return contacts.data;
};

export const apiAddContact = async (contact) => {
  const response = await axiosInstance.post(`/contacts`, contact);
  return response.data;
};

export const apiDeleteContact = async (contactId) => {
  const response = await axiosInstance.delete(`/contacts/${contactId}`);
  return response.data;
};
