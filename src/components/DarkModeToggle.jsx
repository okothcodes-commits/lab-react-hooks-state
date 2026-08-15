import React, { useEffect } from "react";

const DarkModeToggle = ({ theme, setTheme }) => {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme((prev) => !prev)}>
      {theme ? " Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;