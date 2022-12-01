import React from "react";

const Button = ({ variant, text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary"
          ? "bg-gradient-to-r from-[#232B35] to-[#232B35] text-white"
          : variant === "secondary"
          ? "border-[2px] border-gray hover:bg-gradient-to-r from-[#232B35] to-[#232B35] hover:text-white hover:border-none"
          : "underline font-medium text-base"
      } px-8 h-[40px] rounded-[8px]  ${className}`}
    >
      {text}
    </button>
  );
};

export { Button };
