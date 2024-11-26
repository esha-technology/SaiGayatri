import React from "react";

const Why = () => {
  return (
    <section className="w-full   mx-auto py-14">
      <div className="w-full mx-auto sm:px-12 mb-10 lg:mb-20">
        <h1 className="flex flex-col font-poppins font-extrabold  text-center mb-5 text-black">
          <span className="text-8xl">Why </span>
          <span className="text-5xl mt-4 solar">Go Solar?</span>
        </h1>
        <p className="text-2xl font-medium leading-8 text-gray-400 text-center mb-14 max-w-xl mx-auto">
          One Investment. Endless Benefits.
        </p>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14 max-w-screen-md mx-auto">
          <div className="w-36 sm:w-44 lg:w-48 items-center flex flex-col">
            <img
              src="/Icons/bill.png"
              alt="bill"
              className="w-20 sm:w-24 lg:w-28"
            />
            <h5 className="text-center text-base sm:text-lg lg:text-xl mt-2 font-semibold font-poppins text-gray-900">
              Lower Energy Bills
            </h5>
          </div>
          <div className="w-36 sm:w-44 lg:w-48 items-center flex flex-col">
            <img
              src="/Icons/savingMoney.png"
              alt="saving money"
              className="w-20 sm:w-24 lg:w-28"
            />
            <h5 className="text-center text-base sm:text-lg lg:text-xl mt-2 font-semibold font-poppins text-gray-900">
              Secure Investment, High Returns
            </h5>
          </div>
          <div className="w-36 sm:w-44 lg:w-48 items-center flex flex-col">
            <img
              src="/Icons/env.png"
              alt="environment friendly"
              className="w-20 sm:w-24 lg:w-28"
            />
            <h5 className="text-center text-base sm:text-lg lg:text-xl mt-2 font-semibold font-poppins text-gray-900">
              Environment Friendly
            </h5>
          </div>
          <div className="w-36 sm:w-44 lg:w-48 items-center flex flex-col">
            <img
              src="/Icons/maintain.png"
              alt="easy to maintain"
              className="w-20 sm:w-24 lg:w-28"
            />
            <h5 className="text-center text-base sm:text-lg lg:text-xl mt-2 font-semibold font-poppins text-gray-900">
              Easy To Maintain
            </h5>
          </div>
          <div className="w-36 sm:w-44 lg:w-48 items-center flex flex-col">
            <img
              src="/Icons/people.png"
              alt="anyone can use"
              className="w-20 sm:w-24 lg:w-28"
            />
            <h5 className="text-center text-base sm:text-lg lg:text-xl mt-2 font-semibold font-poppins text-gray-900">
              Anyone Can Use
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
