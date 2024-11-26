import emailjs from "emailjs-com";
import React, { useRef, useState, Suspense, useEffect } from "react";
const Heading = React.lazy(() => import("../common/Heading"));
import { useLocation } from "react-router-dom";

const HomeContact = () => {
  const targetSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact" && targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const form = useRef();
  const [errorMessage, setErrorMessage] = useState(""); // To store error message
  const [successMessage, setSuccessMessage] = useState(""); // To store success message
  const [loading, setLoading] = useState(false); // Loading state
  const [afterAppoinment, setAfterAppoinment] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  var isValid = true;

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone Validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    // Message Validation
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    validateForm();

    // Send email using EmailJS
    if (isValid) {
      setLoading(true);
      setErrorMessage(""); // Clear previous error messages
      setSuccessMessage(""); // Clear previous success messages
      emailjs
        .sendForm(
          "service_jqgb7uk", // Replace with your EmailJS Service ID
          "template_i9hlkyq", // Replace with your EmailJS Template ID
          form.current,
          "vYSnrQV_fGtlEjhat" // Replace with your EmailJS User ID
        )
        .then(
          (result) => {
            setLoading(false);
            setSuccessMessage("Our Team Contact You Soon!"); // Set success message
            setErrorMessage(""); // Clear any error message
            form.current.reset(); // Reset form after successful submission
            setAfterAppoinment(true);

            setTimeout(() => {
              setSuccessMessage(""); // Set success message
            }, 100000);
          },
          (error) => {
            console.error("Error sending message: ", error.text);
            setErrorMessage("Something went wrong, please try again.");
            setSuccessMessage(""); // Clear success message
          }
        );

      emailjs.sendForm(
        "service_jqgb7uk", // Replace with your EmailJS Service ID
        "template_6gfrtuh", // Replace with your EmailJS Template ID
        form.current,
        "vYSnrQV_fGtlEjhat" // Replace with your EmailJS User ID
      );
    }
  };
  return (
    <section className="relative  overflow-hidden  bg-[url('/solarBgImage.jpeg')] bg-no-repeat bg-cover bg-center lg:py-36 lg:px-10 py-10 px-0 grid grid-cols-1 md:grid-cols-2 gap-10 ">
      {/* cut paper */}
      <div className="absolute z-20 -bottom-0 w-full">
        <img src="/cut.png" alt="" className="w-full" />
      </div>

      <div className="absolute z-20 -top-1 w-full rotate-180">
        <img src="/cut.png" alt="" className="w-full" />
      </div>

      {/* Dark Bg */}
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
              <img src="/Icons/phone.svg" alt="icon" width={20} />
            </span>
            +91 8143923984
          </div>

          <div className="text-white flex items-center gap-4 sm:gap-5 font-bold">
            <span className="bg-white p-2 rounded-full">
              <img src="/Icons/gmail.svg" alt="icon" width={20} />
            </span>
            saiGayatri @gmail.com
          </div>

          <div className="text-white flex items-center gap-4 sm:gap-5 font-bold">
            <span className="bg-white p-2 rounded-full">
              <img src="/Icons/location.svg" alt="icon" width={20} />
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

      <div
        ref={targetSectionRef}
        id="contact"
        className="relative h-fit px-4 sm:px-6 md:px-8 py-8"
      >
        <div className="bg-white p-6 sm:p-8 md:p-10 lg:rounded-[50px] rounded-3xl shadow-lg">
          <div className="mb-6 text-center sm:text-left">
            <Suspense fallback={<div>Loading...</div>}>
              <Heading>Contact Us</Heading>
            </Suspense>
          </div>
          <div>
            {errorMessage && (
              <div className="error-message text-red-500 mb-3">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div
                className="flex items-center bg-green-100 text-green-700 p-4 rounded-lg border border-green-400 mb-3 transition-all duration-300 ease-in-out"
                role="alert"
              >
                <img src="/Icons/check2.svg" className="mr-3 text-xl" />{" "}
                {/* Success Icon */}
                <span>{successMessage}</span>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
                >
                  <img src="/Icons/person.svg" alt="icon" width={16} />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full p-3 text-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter Your Full Name Here"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
                >
                  <img src="/Icons/gmail.svg" alt="icon" width={14} />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@xyz.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
                >
                  <img src="/Icons/phone.svg" alt="icon" width={16} />
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="block w-full p-3 text-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter Your Phone Number Here"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 text-medium font-medium text-gray-900 flex gap-1 items-center"
                >
                  <img src="/Icons/message.svg" alt="icon" width={16} />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="block w-full p-2.5 text-medium text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message}</span>
                )}
              </div>

              <div className="flex justify-center sm:justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-10 py-2 rounded-md text-xl hover:bg-blue-800 flex items-center gap-2"
                  disabled={loading} // Disable submit button while loading
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span className="filter invert brightness-0">
                        <img src="/Icons/check.svg" alt="icon" width={15} />
                      </span>
                      Submit
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex space-x-4 justify-center m-5">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-4xl bg-white p-1.5 rounded-full transition-colors duration-300"
          >
            <img src="/Icons/fb.svg" alt="icon" width={40} />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 text-4xl bg-white p-1.5 rounded-full transition-colors duration-300"
          >
            <img src="/Icons/instagram.svg" alt="icon" width={40} />
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 text-4xl bg-white p-1.5 rounded-full transition-colors duration-300"
          >
            <img src="/Icons/whatsapp.svg" alt="icon" width={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
