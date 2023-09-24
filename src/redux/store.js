import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './reducer';

export const store = configureStore({
  reducer: {
    tasks: contactReducer,
    filters: filterReducer,
  },
});
