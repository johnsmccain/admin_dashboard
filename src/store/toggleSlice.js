import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isToggle: false,
};
export const toggleSlice = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    toggler: (state) => {
      state.isToggle = !state.isToggle;
    },
  },
});
export const { toggler } = toggleSlice.actions;
export default toggleSlice.reducer;
