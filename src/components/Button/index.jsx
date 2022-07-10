import React from "react";

const Button = ({ children, type, specificButtonStyle, id, onClick }) => {
  return (
    <button
      className={`py-4 px-8 bg-none border-2 border-slate-400 min-w-[120px] text-slate-600 hover:bg-slate-200 hover:border-none ${specificButtonStyle}`}
      type={type || "button"}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
