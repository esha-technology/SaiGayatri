import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { AiOutlineContacts } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div>
      <section className="relative pt-24 pb-10 -mt-20 ">
        <div className="absolute inset-0 bg-[url('https://i0.wp.com/www.grankia.com/wp-content/uploads/2024/04/9-Steps-for-Installing-Solar-Panels-on-Roof.jpg?fit=1200%2C675&ssl=1')] bg-no-repeat bg-cover  z-0 "></div>
        <div className="absolute inset-0 bg-slate-700 opacity-80 filter brightness-50 z-0"></div>

        <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16 lg:px-12 relative z-10 ">
          <div
            className=" inline-flex justify-between items-center px-2 py-1 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full "
            role="alert"
          >
            <FcMoneyTransfer size={23} />
            <span className="text-sm font-medium ml-1">
              Save Money, Go Solar!
            </span>
          </div>
          <h1 className=" pb-5 mb-4 font-mont text-4xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-t from-blue-200  to-white md:text-5xl lg:text-6xl">
            Power Your Future with Clean, Renewable Solar Energy
          </h1>

          <p className="mb-8 text-lg font-normal text-white lg:text-2xl sm:px-16 xl:px-48 font-robot  ">
            Start your solar journey today and enjoy long-term savings with
            clean energy.
          </p>
          <div>
            <button className="relative flex  w-fit items-center justify-center overflow-hidden bg-blue-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-600 before:duration-500 before:ease-out hover:shadow-gray-600 hover:before:h-56 hover:before:w-80 px-5 py-3 mx-auto font-semibold mt-14 rounded-lg">
              <span className="relative z-10 flex justify-center items-center gap-2 text-xl  font-poppins">
                {" "}
                <AiOutlineContacts size={30} />
                Book An Appointment
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;