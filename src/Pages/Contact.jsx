import React from "react";
import Heading from "../components/common/Heading";
import { IoIosPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { RiMessage3Fill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section class="relative  overflow-hidden  bg-[url('https://frontend-cdn.solarreviews.com/solar-panels-cloudy-sky.jpg')] bg-no-repeat bg-cover py-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="absolute inset-0 bg-slate-700 opacity-80 filter brightness-50 z-0"></div>

      <div className="relative flex justify-start items-start flex-col">
        <h1 class="my-4 text-4xl font-extrabold tracking-tight  text-white md:text-5xl font-mont">
          <span className="text-sky-400">
            Ready to Slash Your Energy Bills?
          </span>
          Let's Make It Happen with Solar!
        </h1>
        <div className="w-2/3 p-10 h-full  mt-8 rounded-3xl text-xl flex flex-col gap-5">
          <div className="text-white flex items-center gap-5 font-bold">
            <span className="bg-white p-2 rounded-full">
              <IoCall color="black" />
            </span>
            +91 8143923984
          </div>

          <div className="text-white flex items-center gap-5 font-bold">
            <span className="bg-white p-2 rounded-full">
              <SiGmail color="black" />
            </span>
            syedtalhaahmed123786@gmail.com
          </div>

          <div className="text-white flex items-center gap-5 font-bold">
            <span className="bg-white p-2 rounded-full">
              <FaLocationDot color="black" />
            </span>
            Location
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d237.8964672690708!2d78.47092986840539!3d17.443266887670582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI2JzM2LjEiTiA3OMKwMjgnMTUuOSJF!5e0!3m2!1sen!2sin!4v1731929589072!5m2!1sen!2sin"
            width="600"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-3xl mt-5"
          ></iframe>
        </div>
      </div>
      <div class="relative h-fit">
        <div className="bg-white  p-10 rounted rounded-[50px]   ">
          <div className="mb-5">
            <Heading>Contact Us</Heading>
          </div>
          <form action="#" class="space-y-5">
            <div>
              <label
                for="subject"
                class=" mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
              >
                <IoIosPerson />
                Name
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Enter Your Full Name Here"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class=" mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
              >
                <MdEmail />
                Email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@xyz.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class=" mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
              >
                <PiPhoneFill />
                Phone
              </label>
              <input
                type="number"
                id="subject"
                class="block p-3 w-full text-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Enter Your Phone Number Here"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class=" mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
              >
                <RiMessage3Fill /> Message
              </label>
              <textarea
                id="message"
                rows="3"
                class="block p-2.5 w-full text-medium text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className=" flex justify-end">
              <button className="bg-blue-500 text-white px-20 py-2 rounded-md text-xl hover:bg-blue-800 flex items-center gap-2 ">
                <FaCheckCircle />
                Submit
              </button>
            </div>
          </form>
        </div>

        <div>
          <FaFacebook />
        </div>
      </div>
    </section>
  );
};

export default Contact;
