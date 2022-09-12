import React from "react";

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={`p-2 text-xl w-full my-2 border border-gray-400 rounded-sm ${className}`}
      {...props}
    />
  );
};
