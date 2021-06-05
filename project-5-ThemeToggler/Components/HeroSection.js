import React, { useContext } from "react";
import AppTheme from "../Colors";
import ThemeContext from "../Context/ThemeContext";

const HeroSection = () => {
  const [theme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Theme Toggler</h1>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default HeroSection;
