import React from "react";
import Heading from "../common/Heading";
import { IoIosPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { RiMessage3Fill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import specific icons

const HomeContact = () => {
  return (
    <section className="relative  overflow-hidden  bg-[url('/solarBgImage.jpeg')] bg-no-repeat bg-cover bg-center lg:py-16 lg:px-10 py-5 px-0 grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <div className="absolute inset-0 bg-slate-700 opacity-80 filter brightness-50 z-0"></div>

      <div className="relative flex justify-start items-start flex-col">
        <h1 className="my-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl font-mont px-3">
          <span className="text-sky-400">
            Ready to Slash Your Energy Bills?
          </span>
          Let's Make It Happen with Solar!
        </h1>

        <div className="w-full  p-6  h-full mt-6 rounded-3xl text-xl flex flex-col gap-5 ">
          <div className="text-white flex items-center gap-4 sm:gap-5 font-bold">
            <span className="bg-white p-2 rounded-full">
              <IoCall color="black" />
            </span>
            +91 8143923984
          </div>

          <div className="text-white flex items-center gap-4 sm:gap-5 font-bold">
            <span className="bg-white p-2 rounded-full">
              <SiGmail color="black" />
            </span>
            saiGayatri @gmail.com
          </div>

          <div className="text-white flex items-center gap-4 sm:gap-5 font-bold">
            <span className="bg-white p-2 rounded-full">
              <FaLocationDot color="black" />
            </span>
            Location
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d237.8964672690708!2d78.47092986840539!3d17.443266887670582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI2JzM2LjEiTiA3OMKwMjgnMTUuOSJF!5e0!3m2!1sen!2sin!4v1731929589072!5m2!1sen!2sin"
            width="100%"
            height="250"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl mt-5"
          ></iframe>
        </div>
      </div>

      <div className="relative h-fit px-4 sm:px-6 md:px-8 py-8">
        <div className="bg-white p-6 sm:p-8 md:p-10 lg:rounded-[50px] rounded-3xl shadow-lg">
          <div className="mb-6 text-center sm:text-left">
            <Heading>Contact Us</Heading>
          </div>
          <form action="#" className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
              >
                <IoIosPerson />
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full p-3 text-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter Your Full Name Here"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
              >
                <MdEmail />
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@xyz.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
              >
                <PiPhoneFill />
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="block w-full p-3 text-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter Your Phone Number Here"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
              >
                <RiMessage3Fill /> Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="block w-full p-2.5 text-medium text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <div className="flex justify-center sm:justify-end">
              <button className="bg-blue-500 text-white px-10 py-2 rounded-md text-xl hover:bg-blue-800 flex items-center gap-2">
                <FaCheckCircle />
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex space-x-4 justify-center m-5">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-4xl bg-white p-1.5 rounded-full transition-colors duration-300"
          >
            <FaFacebook />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 text-4xl bg-white p-1.5 rounded-full transition-colors duration-300"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 text-4xl bg-white p-1.5 rounded-full transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
