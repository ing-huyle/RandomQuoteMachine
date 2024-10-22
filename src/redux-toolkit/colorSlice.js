import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../App';

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    }
  }
});

export const colorReducer = colorSlice.reducer;
export const colorActions = colorSlice.actions;