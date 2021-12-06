// export const lightTheme = theme("mode",{
//   mode: "light",
//   primary_background_color: "#DDDDDD",
//   primary_text_color: "#2a2a2a",
//   primary_button_color: "#4400ff",
//   primary_button_text_color: "#ffffff",
// });

// export const darkTheme = theme("mode", {
//   mode: "dark",
//   primary_background_color: "#2a2a2a",
//   primary_text_color: "#dddddd",
//   primary_button_color: "#4400ff",
//   primary_button_text_color: "#ffffff",
// });

import theme from "styled-theming";

export const backgroundColor: theme.ThemeSet = theme("mode", {
  light: "#DDDDDD",
  dark: "#2a2a2a",
});

export const textColor: theme.ThemeSet = theme("mode", {
  light: "#2a2a2a",
  dark: "#DDDDDD",
});

export const buttonBackgroundColor = theme("mode", {
  light: "#4400ff",
  dark: "#6200EE",
});

export const buttonTextColor = theme("mode", {
  light: "#eee",
  dark: "#222",
});
