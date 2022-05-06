import React, { createContext, useState } from "react";

export const theme = createContext();

const ThemeContext = ({ children }) => {
  const [themevalue, SetThemeValue] = useState(false);

  const click = () => {
    SetThemeValue(!themevalue);
  };

  return (
    <theme.Provider value={{ themevalue, SetThemeValue, click }}>
      {children}
    </theme.Provider>
  );
};

export default ThemeContext;
