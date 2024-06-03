// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const themes = {
  light: "light",
  dark: "dark",
};

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme && Object.values(themes).includes(theme)) {
    return theme;
  }

  const userMedia = window.matchMedia("(prefers-color-scheme: light)");

  return userMedia.matches ? themes.light : themes.dark;
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === themes.light ? themes.dark : themes.light;
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
