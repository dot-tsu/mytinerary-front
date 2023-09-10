import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './placesSlice'; 
import countriesReducer from './countriesSlice';

const store = configureStore({
  reducer: {
    places: placesReducer, 
    countries: countriesReducer,
  },
});

export default store;
