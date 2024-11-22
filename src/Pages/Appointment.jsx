import React, { useState } from "react";
import Heading from "../components/common/Heading";
import { IoIosPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import specific icons
import "./appointment.css";
import { BsFillLaptopFill } from "react-icons/bs";
import DatePicker from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker styles
import { SlCalender } from "react-icons/sl";

const Appointment = () => {
  const [mode, setMode] = useState("Virtual"); // Initialize mode state
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentType: "",
    appointmentDate: selectedDate,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentType: "",
    appointmentDate: "",
  });

  // Handler function to update mode
  const handleModeChange = (event) => {
    setMode(event.target.value); // Update the mode based on selected option
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.appointmentType) {
      newErrors.appointmentType = "Appointment type is required";
      isValid = false;
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = "Appointment date is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Only proceed if form is valid
    if (validateForm()) {
      // If valid, you can proceed with the form data (e.g., send it to a server)
      console.log("Form submitted:", formData);
      // You can reset form or show a success message here
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-form">
          <Heading>Appointment</Heading>
          <form onSubmit={handleSubmit} className="form">
            <div>
              <label htmlFor="name" className="label">
                <IoIosPerson />
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input"
                placeholder="Enter Your Full Name Here"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div>
              <label htmlFor="email" className="label">
                <MdEmail />
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="name@xyz.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
              <label htmlFor="phone" className="label">
                <PiPhoneFill />
                Phone
              </label>
              <input
                type="text" // Using text instead of number for better validation
                id="phone"
                className="input"
                placeholder="Enter Your Phone Number Here"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="appointmentbox">
              <div>
                <label htmlFor="appointment" className="label">
                  <BsFillLaptopFill /> Appointment Type
                </label>
                <select
                  id="appointment"
                  className="input"
                  value={formData.appointmentType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      appointmentType: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Select Appointment Type
                  </option>
                  <option value="virtual">Virtual</option>
                  <option value="on-site">On-site</option>
                </select>
                {errors.appointmentType && (
                  <span className="error">{errors.appointmentType}</span>
                )}
              </div>

              <div className="dateBox">
                <label htmlFor="appointment-date" className="label">
                  <SlCalender />
                  Appointment Date
                </label>
                <DatePicker
                  selected={formData.appointmentDate}
                  onChange={(date) =>
                    setFormData({ ...formData, appointmentDate: date })
                  }
                  minDate={new Date()} // Disable past dates
                  className="input"
                  dateFormat="dd/MM/yyyy"
                />
                {errors.appointmentDate && (
                  <span className="error">{errors.appointmentDate}</span>
                )}
              </div>
            </div>

            <div className="submit-container">
              <button type="submit" className="submit-btn">
                <FaCheckCircle />
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn fb-btn"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn ig-btn"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn wa-btn"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </>
  );
};

export default Appointment;
