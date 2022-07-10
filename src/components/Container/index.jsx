import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto p-2 w-[95%]">
      {children}
    </div>
  );
};

export default Container;
