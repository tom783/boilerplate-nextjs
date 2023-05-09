import { createSlice } from '@reduxjs/toolkit';

export const sampleSlice = createSlice({
  name: 'sample',
  initialState: {},
  reducers: {
    sample: (state) => {},
  },
});

export const { sample } = sampleSlice.actions;
export default sampleSlice.reducer;
