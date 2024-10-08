import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  value: "Everything exists.",
  author: "Huy",
  error: ""
};

export const fetchQuote = createAsyncThunk("quote/fetchQuote", () => {
  return axios
    .get("https://api.api-ninjas.com/v1/quotes", {
      headers: { 'X-Api-Key': `uuG8lwcXmp4I/mR0J2Yk6Q==0UX3cz7EFt25Afmj` }
    })
    .then((response) => response.data);
});

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchQuote.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.loading = false,
      state.value = action.payload[0].quote,
      state.author = action.payload[0].author;
      state.error = ""
    });
    builder.addCase(fetchQuote.rejected, (state, action) => {
      state.loading = false,
      state.data = [],
      state.error = action.error.message
    })
  }
});

export const quoteReducer = quoteSlice.reducer;