import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHeaderData = createAsyncThunk('places/fetchHeaderData', async () => {
  const response = await axios.get('https://mytinerary-deploy.onrender.com/api/places');
  return response.data;
});

export const fetchPlaces = createAsyncThunk('places/fetchPlaces', async (searchQuery) => {
  const response = await axios.get('https://mytinerary-deploy.onrender.com/api/places', {
    params: { query: searchQuery }
  });
  return response.data;
});

export const fetchPlaceDetails = createAsyncThunk('places/fetchPlaceDetails', async (placeId) => {
  const response = await axios.get(`https://mytinerary-deploy.onrender.com/api/places/${placeId}`);
  return response.data;
});

export const fetchItineraries = createAsyncThunk('places/fetchItineraries', async (placeId) => {
  const response = await axios.get(`https://mytinerary-deploy.onrender.com/api/itineraries/place/${placeId}`);
  return response.data;
});

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    headerPlaces: [],
    places: [],
    placeDetails: null,
    itineraries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeaderData.fulfilled, (state, action) => {
        state.headerPlaces = action.payload;
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.places = action.payload;
      })
      .addCase(fetchPlaceDetails.fulfilled, (state, action) => {
        state.placeDetails = action.payload;
      })
      .addCase(fetchItineraries.fulfilled, (state, action) => {
        state.itineraries = action.payload;
      });
  },
});

export default placesSlice.reducer;