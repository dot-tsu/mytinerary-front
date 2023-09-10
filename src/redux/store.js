import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './placesSlice'; 
import countriesReducer from './countriesSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    places: placesReducer, 
    countries: countriesReducer,
    auth: authReducer,
  },
});

export default store;