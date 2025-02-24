import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://679e081e946b0e23c06267ea.mockapi.io/'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts')
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`)
      return id
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
