import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from '../../services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      // console.log(contacts.data.contacts);
      // console.log(contacts);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const items = await contactsApi.addContact(contact);
      console.log(items);
      return items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (_id, { rejectWithValue }) => {
    try {
      await contactsApi.dltContact(_id);
      // console.log(_id);

      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
