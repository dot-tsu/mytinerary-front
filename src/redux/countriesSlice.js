import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    const data = await response.json();
    return data.map((country) => country.name);
  });
  

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
