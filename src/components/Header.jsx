import React from "react";

const Header = ({ handleTogler }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => handleTogler((setDarkMode) => !setDarkMode)}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
