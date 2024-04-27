import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiAddContact,
  apiDeleteContact,
  apiGetContacts,
} from "../utils/api.js";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkApi) => {
    try {
      return await apiGetContacts();
    } catch (e) {
      return thunkApi.rejectWithValue(e.value);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      return await apiAddContact(contact);
    } catch (e) {
      return thunkApi.rejectWithValue(e.value);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const contacts = await apiDeleteContact(contactId);
      return contacts;
    } catch (e) {
      return thunkApi.rejectWithValue(e.value);
    }
  },
);
