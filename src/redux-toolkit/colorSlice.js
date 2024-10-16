import { colors } from '../App.jsx';
import { createSlice } from '@reduxjs/toolkit';

const generateRandomColor = (excludeColor) => {
  let newColor;
  do {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  } while (newColor === excludeColor);
  return newColor;
}

const initialState = {
  color: generateRandomColor('#000000')
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state) => {
      state.color = generateRandomColor(state.color);
    }
  }
});

export const colorReducer = colorSlice.reducer;
export const colorActions = colorSlice.actions;