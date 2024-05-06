import { configureStore } from '@reduxjs/toolkit';
import countries from './counterSlice';

const store = configureStore({
  reducer: {
    countries: countries,
    devtools: true,
  },
});
export default store;
