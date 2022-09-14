const breakpoint = {
  tablet: "min-width: 768px",
  desktop: "min-width: 1024px",
  largeScreen: "min-width: 1280px",
} as const;

const Theme = {
  breakpoint,
  color: {
    orange: "#FEB28C",
    yellow: "#FFF4BF",
    purple: "#5F47A6",
    green: "#A3BFA7",
    red: "#C0533E",
    blue: "#739AE5",
    grey: "#4A4A4A",
    black: "#292929",
    white: "#FFF",
  },
  font: {
    default: '"Inter", sans-serif',
    serif: '"Courier", serif',
  },
  transition: {
    fast: "0.25s",
    medium: "0.35s",
    slow: "0.45s",
  },
  fontSize: {
    h1: "3rem", // 48px
    h2: "1.625rem", // 26px
    text: "1rem", // 16px
    small: "0.75rem", // 12px
    medium: "1.25rem", // 20px
    large: "2rem", // 32px
    xlarge: "2.5rem", // 40px
    xxLarge: "3.5rem", // 56px
  },
  padding: {
    small: "5px",
    medium: "10px",
    large: "20px",
    xLarge: "40px",
  },
  margin: {
    none: "0rem",
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
    xLarge: "2rem",
    xxLarge: "3rem",
  },
  borderRadius: {
    small: "0.125rem",
    medium: "0.25rem",
    large: "0.5rem",
  },
} as const;

export default Theme;
