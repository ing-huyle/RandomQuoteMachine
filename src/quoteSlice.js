import { colors } from './App.jsx';
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  index: 0,
  content: "Everything exists.",
  author: "Huy"
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    new_quote: (state) => {
      let i = Math.floor(Math.random() * colors.length);
      while (i === state.index) {
        i = Math.floor(Math.random() * colors.length);
      }

      state.index = i;
    }
  }
});

export const quoteReducer = quoteSlice.reducer;
export const quoteActions = quoteSlice.actions;