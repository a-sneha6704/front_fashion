import React from "react";

const StylerButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default StylerButton;
