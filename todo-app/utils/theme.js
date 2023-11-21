"use client"; //this is a client side component
import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: false,
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
