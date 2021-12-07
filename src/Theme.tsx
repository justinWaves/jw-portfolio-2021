import theme from "styled-theming";

export const backgroundColor: theme.ThemeSet = theme("mode", {
  light: "#DDDDDD",
  dark: "#2a2a2a",
});

export const secondaryBackgroundColor: theme.ThemeSet = theme("mode", {
  light: "#FFFFFF",
  dark: "#121212",
});

export const textColor: theme.ThemeSet = theme("mode", {
  light: "#2a2a2a",
  dark: "#DDDDDD",
});

export const linkColor: theme.ThemeSet = theme("mode", {
  light: "#6200EE",
  dark: "#BB86FC",
});

export const secondaryTextColor: theme.ThemeSet = theme("mode", {
  light: "#000000",
  dark: "#03DAC5",
});

// export const buttonBackgroundColor = theme("mode", {
//   light: "#4400ff",
//   dark: "#6200EE",
// });

// export const buttonTextColor = theme("mode", {
//   light: "#eee",
//   dark: "#222",
// });
