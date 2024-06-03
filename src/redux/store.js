import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    theme: themeReducer,
  },
});
