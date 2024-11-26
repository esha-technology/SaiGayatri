import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-7 pt-3 bg-transparent relative z-50 text-white font-poppins py-0  ">
      <div className="navbar-start">
        <div className="dropdown  -ml-7 lg:ml-0">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black  gap-3"
          >
            <li className="rounded-full  hover:bg-blue-500 duration-200 shadowNav ">
              <Link to={"/"}>
                <img src="/Icons/Home.svg" alt="" width={20} />
                Home
              </Link>
            </li>
            <li className="rounded-full  hover:bg-blue-500 duration-200 shadowNav ">
              <Link to={"/services"}>
                <img src="/Icons/Services.svg" alt="" width={20} />
                Services
              </Link>
            </li>

            <li className="rounded-full  hover:bg-blue-500 duration-200 shadowNav">
              <Link to={"/blog"}>
                <img src="/Icons/Blogs.svg" alt="" width={25} />
                Blog
              </Link>
            </li>

            <li className="rounded-full  hover:bg-blue-500 duration-200 shadowNav">
              <Link to={"/solarCalculator"}>
                <img src="/Icons/SolarCalculator.svg" alt="" width={20} />
                Solar Calculator
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative filter brightness-[1000] contrast-150">
          <img
            src="/solarLogo.png"
            alt="logo"
            loading="lazy"
            className="z-10 relative shadowBg "
            width={180}
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal text-base font-semibold gap-5 bg-white bg-opacity-10 px-3   rounded-full ">
          <li className="rounded-full bg-black bg-opacity-20 hover:bg-blue-500 duration-200 shadowNav">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="rounded-full bg-black bg-opacity-20 hover:bg-blue-500 duration-200 shadowNav">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="rounded-full bg-black bg-opacity-20 hover:bg-blue-500 duration-200 shadowNav">
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li className="rounded-full bg-black bg-opacity-20 hover:bg-blue-500 duration-200 shadowNav">
            <Link to={"/solarCalculator"}>Solar Calculator</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"/#contact"}
          className="bg-white text-black px-3 py-2 rounded-xl font-semibold "
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
