import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className="text-[32px] md:text-[40px]   text-center font-extrabold font-mont  bg-gradient-to-t from-slate-700  to-slate-500 text-transparent bg-clip-text">
      {children}
      <div className="sm:w-1/5 w-1/2 mx-auto">
        <hr className="border border-gray-300"></hr>
      </div>
    </h1>
  );
};

export default Heading;
