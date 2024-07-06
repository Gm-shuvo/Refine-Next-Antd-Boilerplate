import { ThemeConfig } from "antd";

type ThemeNames =
  | "Blue"
  | "Purple"
  | "Magenta"
  | "Red"
  | "Orange"
  | "Yellow"
  | "Green";

type RefineThemes = Record<ThemeNames, ThemeConfig>;

export const Themes: RefineThemes = {
  Blue: {
    token: {
      colorPrimary: "#1677FF",
    },
    components: {
      Button: {
        colorFill: "rgba(0, 0, 0, 0.15) ",
        colorPrimary: "#1677FF",
        colorPrimaryHover: "#4096ff",
        colorPrimaryActive: "#0958d9",
        algorithm: true, // Enable algorithm
      },
    },
    
  },
  Purple: {
    token: {
      colorPrimary: "#722ED1",
    },
  },
  Magenta: {
    token: {
      colorPrimary: "#EB2F96",
    },
  },
  Red: {
    token: {
      colorPrimary: "#F5222D",
    },
  },
  Orange: {
    token: {
      colorPrimary: "#FA541C",
    },
  },
  Yellow: {
    token: {
      colorPrimary: "#FAAD14",
    },
  },
  Green: {
    token: {
      colorPrimary: "#52C41A",
    },
  },
};
