import React from "react";

const Button = ({ content, color }) => {
  return <button className={`btn color-${color}`}>{content}</button>;
};

export default Button;
