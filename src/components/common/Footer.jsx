import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              /> */}
              <div className=" filter contrast-125">
                <img
                  src="/solarLogo.png"
                  alt="logo"
                  loading="lazy"
                  className="z-10 relative  "
                  width={220}
                />
              </div>
            </a>
            <div className="mt-7 font-mont font-medium flex flex-col gap-3 text-slate-600">
              <p className="flex gap-2 items-center">
                <MdEmail />
                <a href="mailto:syedtalhaahemd123786@gmail.com">
                  syedtalhaahemd123786@gmail.com
                </a>
              </p>
              <p className="flex gap-2 items-center">
                <PiPhoneFill />
                <a href="tel:+918143923984">+91 8143923984</a>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Navigate
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/blog"} className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to={"/solarCalculator"} className="hover:underline">
                    Solar Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Social Media
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  mx-auto  " />
        <div className>
          <h1 className="text-sm text-gray-500 text-center ">
            © 2024 Sai Gayatri™ . All Rights Reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
