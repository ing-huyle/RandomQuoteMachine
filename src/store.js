import { quoteReducer } from "./quoteSlice.js";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: quoteReducer
});

export default store;