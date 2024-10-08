import { colors } from './App.jsx';
import { createSlice } from "@reduxjs/toolkit";

const generateRandomIndex = () => {
  return Math.floor(Math.random() * colors.length);
}

const initialState = {
  index: generateRandomIndex()
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    new_color: (state) => {
      let i = generateRandomIndex();
      while (i === state.index) {
        i = generateRandomIndex();
      }

      state.index = i;
    }
  }
});

export const colorReducer = colorSlice.reducer;
export const colorActions = colorSlice.actions;