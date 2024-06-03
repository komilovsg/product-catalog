// import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../../redux/slices/themeSlice";

import sunForToggle from "../../../assets/icons/darkModeBtn/day.png";
import moonForToggle from "../../../assets/icons/darkModeBtn/moon.png";

import "./styles.scss";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(toggleTheme(newTheme));
  };

  return (
    <button
      className={`theme-toggle ${theme}`}
      onClick={handleToggleTheme}
      type="button"
    >
      <div className="theme-toggle-div-bg">
        <img
          src={theme === "light" ? moonForToggle : sunForToggle}
          alt={theme === "light" ? "Moon icon" : "Sun icon"}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
