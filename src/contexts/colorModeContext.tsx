import { App, ConfigProvider, theme } from "antd";
import { parseCookies, setCookie } from "nookies";
import { Themes } from "@src/utils/themes";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setIsMounted(true);

    const { mode } = parseCookies();
    // if mode is not set in cookies, set it to system
    if (!mode) {
      setCookie(null, "mode", "system", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } else {
      setMode(mode);
    }
  }, []);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
      setCookie(null, "mode", "dark", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } else {
      setMode("light");
      setCookie(null, "mode", "light", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }
  };

  const { darkAlgorithm, defaultAlgorithm } = theme;

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ConfigProvider
        // you can change the theme colors here. example: ...RefineThemes.Magenta,
        theme={{
          ...Themes.Blue,
          algorithm: mode === "light" ? defaultAlgorithm : darkAlgorithm,
          hashed: true,
        }}
      >
        <App>{isMounted && children}</App>
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
