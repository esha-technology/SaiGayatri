import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className="w-fit px-8 text-[20px]  font-bold font-poppins  bg-gradient-to-t from-slate-900  to-slate-500 text-transparent bg-clip-text">
      {children}
      <hr className="border border-gray-500 w-[50%]"></hr>
    </h1>
  );
};

export default Heading;
