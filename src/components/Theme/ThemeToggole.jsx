import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("boishakhi-light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "boishakhi-light";
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === "boishakhi-light" ? "boishakhi-dark" : "boishakhi-light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-circle btn-ghost border border-base-300"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "boishakhi-light" ? (
        <FiMoon className="text-lg" />
      ) : (
        <FiSun className="text-lg" />
      )}
    </button>
  );
};

export default ThemeToggle;
