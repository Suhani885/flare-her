export const colors = {
  primary: {
    50: "#fef5f8",
    100: "#fde8f1",
    200: "#fcd1e4",
    300: "#f9aaca",
    400: "#f578aa",
    500: "#ed4e8c",
    600: "#db2d6e",
    700: "#bd1d56",
    800: "#9d1a47",
    900: "#84193e",
  },
  secondary: {
    50: "#f4f9f4",
    100: "#e6f3e6",
    200: "#cde6cd",
    300: "#a4d3a4",
    400: "#72b872",
    500: "#4c9d4c",
    600: "#3a7f3a",
    700: "#2f6530",
    800: "#285128",
    900: "#224324",
  },
  accent: {
    50: "#f0f9fa",
    100: "#daf1f4",
    200: "#b9e4ea",
    300: "#89d1dc",
    400: "#52b6c7",
    500: "#379aad",
    600: "#2f7d92",
    700: "#2b6577",
    800: "#2a5462",
    900: "#274753",
  },
} as const;

export const semanticColors = {
  success: "#4c9d4c",
  warning: "#d97706",
  error: "#db2d6e",
  info: "#379aad",
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
} as const;

export const borderRadius = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  full: "9999px",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const theme = {
  colors,
  semanticColors,
  spacing,
  borderRadius,
  breakpoints,
} as const;

export type Theme = typeof theme;
export type ColorScale = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;