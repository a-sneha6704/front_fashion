import React from "react";

export const StylerCard = ({ className, children }) => {
  return (
    <div className={`border rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
