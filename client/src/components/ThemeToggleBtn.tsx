// ThemeToggleButton.tsx
import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Växla till {theme === "light" ? "mörkt" : "ljus"} tema
    </button>
  );
};

export default ThemeToggleButton;
