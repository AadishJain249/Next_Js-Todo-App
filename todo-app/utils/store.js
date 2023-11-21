"use client";
import { configureStore } from "@reduxjs/toolkit";
import darkTheme from './theme'
const store = configureStore({
    reducer:{
       theme:darkTheme
    }
});
export default store;