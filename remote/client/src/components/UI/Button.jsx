import React from "react";
import PropTypes from "prop-types";

export const Button = ({ className, children, variant, ...props }) => {
  var classes = "";
  if (variant === "sm") {
    classes += "px-2 py-1 text-md m-0";
  } else if (variant === "md") {
    classes += "px-3 py-1.5 text-lg m-0";
  } else {
    classes += "px-4 py-1.5 text-xl my-2";
  }
  return (
    <button className={`${className} ${classes} border rounded-md `} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = { variant: PropTypes.oneOf(["sm", "md", "default"]) };
