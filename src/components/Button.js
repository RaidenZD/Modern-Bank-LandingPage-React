import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient  hover:opacity-90 rounded-2xl font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
