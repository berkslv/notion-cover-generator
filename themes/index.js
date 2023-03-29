const waveSVG = require("./utils/wave");
const blobSVG = require("./utils/blob");
const stackedSVG = require("./utils/stacked");
const circleSVG = require("./utils/circle");

const colors = {
  green: {
    background: "#191919",
    primary: "#009664",
    secondary: "#00ba7c",
    tertiary: "#02e095",
  },

  blue: {
    background: "#191919",
    primary: "#1d4ed8",
    secondary: "#3b82f6",
    tertiary: "#93c5fd",
  },

  red: {
    background: "#191919",
    primary: "#b91c1c",
    secondary: "#ef4444",
    tertiary: "#fca5a5",
  },

  yellow: {
    background: "#191919",
    primary: "#854d0e",
    secondary: "#eab308",
    tertiary: "#fde047",
  },

  purple: {
    background: "#191919",
    primary: "#6b21a8",
    secondary: "#d946ef",
    tertiary: "#f0abfc",
  },
};

const themes = {
  wave(theme, text) {
    return waveSVG.primary(text, colors[theme]);
  },

  blob(theme, text) {
    return blobSVG.primary(text, colors[theme]);
  },

  stacked(theme, text) {
    return stackedSVG.primary(text, colors[theme]);
  },

  circle(theme, text) {
    return circleSVG.primary(text, colors[theme]);
  },
};

module.exports = themes;
