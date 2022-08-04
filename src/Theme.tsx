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

export const linkColorHover: theme.ThemeSet = theme("mode", {
  light: "#934cff",
  dark: "#dcc5f9",
});

export const secondaryTextColor: theme.ThemeSet = theme("mode", {
  light: "#000000",
  dark: "#C8FFF4",
});

export const linkWindowBackgroundColor = theme("mode", {
  light: "#6200EE95",
  dark: "#BB86FC95",
});
