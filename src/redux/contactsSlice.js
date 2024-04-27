import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps.js";
import { selectNameFilter } from "./filtersSlice.js";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  },
);
