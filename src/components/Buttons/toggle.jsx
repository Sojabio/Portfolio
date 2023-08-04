import React, { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'; // Import faMoon icon
import { faSun } from '@fortawesome/free-solid-svg-icons';
export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className="nav-toggle" onClick={toggleDarkMode}>
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} alt="switch to light mode" /> // Use faMoon icon
        ) : (
          <FontAwesomeIcon icon={faMoon} alt="switch to dark mode" />
        )}
      </div>
    </>
  );
}
