import { colorReducer } from "./colorSlice.js";
import { quoteReducer } from "./quoteSlice.js";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { 
    color: colorReducer,
    quote: quoteReducer
  }
});

export default store;