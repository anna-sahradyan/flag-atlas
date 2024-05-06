import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllCountries = createAsyncThunk(
  'countries/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://restcountries.com/v2/all`);
      return data;
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const fetchSingleCountry = createAsyncThunk(
  'countries/fetchSingle',
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v2/name/${name}`,
      );
      console.log(data);
      return data;
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

const initialState = {
  countries: [],
  singleCountry: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllCountries.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.countries = action.payload;
      })
      .addCase(fetchAllCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchSingleCountry.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSingleCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleCountry = action.payload;
      })
      .addCase(fetchSingleCountry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const selectStatus = state => state.countries.isSuccess;
export const selectAllCountries = state => state.countries.countries;
export const selectSingleCountry = state => state.countries.singleCountry;
export default countriesSlice.reducer;
