import React from "react";
import PropTypes from "prop-types";

/**
 * Reusable Button — small, accessible, and tailwind-friendly.
 * Props:
 *  - variant: 'primary' | 'secondary' | 'ghost'
 *  - size: 'sm' | 'md' | 'lg'
 */
const VARIANT_CLASSES = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  ghost: "bg-transparent hover:bg-gray-50 text-gray-900",
};

const SIZE_CLASSES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const Button = ({ children, onClick, type = "button", variant = "primary", size = "md", className = "", ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export default Button;
