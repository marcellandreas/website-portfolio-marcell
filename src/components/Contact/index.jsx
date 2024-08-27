import React, { useState, useEffect } from "react";
import { contacts_info } from "../../assets/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    setIsButtonDisabled(!allFieldsFilled);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way
    alert("Feature not implemented yet."); // Show alert message
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 lg:px-16 text-white bg-primary-700 flex flex-col items-center gap-8"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Contact <span className="text-primary-100">Me</span>
        </h1>
        <p className="text-gray-400 mt-2 text-lg">Get in touch</p>
        <hr className="border-primary-100 border-2 w-16 mx-auto mt-4" />
      </div>
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 flex flex-col md:flex-row bg-primary-200 rounded-lg shadow-lg overflow-hidden">
        {/* Contact Info */}
        <div className="flex-1 bg-primary-600 text-white flex flex-col gap-6 pl-4 py-4 md:p-12">
          {/* Header Section */}
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-3xl md:text-4xl">Contact</h1>
            <div className="flex-grow border-t border-white h-1" />
          </div>

          {/* Contact Information */}
          {contacts_info.map((info, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-lg md:text-xl"
            >
              <ion-icon name={`${info.logo}`} className="text-2xl" />
              <span>{info.text}</span>
            </div>
          ))}

          {/* Footer Border */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex-grow border-t border-white h-1" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 p-8">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-lg font-medium mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 bg-primary-800 rounded-lg outline-none pl-3 text-black"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-lg font-medium mb-2">
                  Your Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 bg-primary-800 rounded-lg outline-none pl-3 text-black"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="block text-lg font-medium mb-2">
                Your Subject
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full h-12 bg-primary-800 rounded-lg outline-none pl-3 text-black"
                type="text"
                placeholder="Your Subject"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="block text-lg font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-40 bg-primary-800 rounded-lg outline-none pl-3 text-black"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`bg-primary-100 text-primary-200 rounded-xl h-12 w-full md:w-auto text-xl font-semibold flex justify-center items-center gap-2 ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
