"use client";
import React from "react";

const Button = ({ label, size, color,bgcolor, ...rest }) => {
  const style = {
    color: color,
    background: bgcolor === "none" ? "none" : bgcolor,
    fontSize:
      size === "lg"
        ? 18 + "px"
        : size === "md"
        ? 16 + "px"
        : size === "sm"
        ? 14 + "px"
        : 12 + "px",
    borderRadius: bgcolor === "none" ? "0px" : "6px",
  };

  return (
    <button style={style} {...rest}>
      {label}
    </button>
  );
};

export default Button;
