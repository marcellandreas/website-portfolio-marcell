import React, { useState } from "react";

const Contact = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const contact_info = [
    { logo: "mail", text: "marcellandreas.123@gmail.com" },
    { logo: "logo-whatsapp", text: "+6282141840186" },
    {
      logo: "location",
      text: "Indonesia",
    },
  ];
  return (
    <section
      id="contact"
      className="py-20 px-3 text-white bg-primary-700 z-[999px] flex justify-center items-center flex-col gap-4 "
    >
      <div data-aos="fade-up" className=" flex flex-col items-center m-0 p-0">
        <h1 className="text-4xl font-semibold">
          Contact <span className="text-primary-100">Me</span>
        </h1>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <hr className="border-primary-100 fonr-bold border-1 h-[5px] w-16 " />
      </div>
      <div className="w-full md:w-4/5 bg-primary-200  flex flex-wrap ">
        {/* 1 */}
        <div className="flex-[1] md:flex-[2] w-1/2 bg-[#272727] flex justify-center items-center flex-col py-10 ">
          <div className="flex items-center w-full pl-16 gap-2">
            <h1 className="font-semibold text-4xl">Contact</h1>
            <div className="flex-grow border border-white bg-white h-1  w-1/2 " />
          </div>
          <div className="flex flex-col pl-8 md:pl-16 items-start w-full py-10 gap-5">
            <div className="flex gap-5 items-center justify-center text-xl">
              <ion-icon name="call-outline"></ion-icon>
              <div>+62-821-4184-0186</div>
            </div>
            <div className="flex gap-5 items-center justify-center text-xl">
              <ion-icon name="mail-outline"></ion-icon>
              <div>marcellandreas.123@gmail.com </div>
            </div>
            <div className="flex gap-5 items-center justify-center text-xl">
              <ion-icon name="location-outline"></ion-icon>
              <div>Depok, Jawa Barat, Indonesia</div>
            </div>
          </div>
          <div className="flex items-center w-full pr-[200px] gap-2">
            <div className="flex-grow border border-white bg-white h-1  w-1/2 " />
          </div>
        </div>
        {/* 2 */}
        <div className="flex-[1] md:flex-[3] py-10 px-4 md:px-8 w-full md:w-auto">
          <form className="flex flex-col gap-5 w-full ">
            <div className="flex flex-col md:flex-row gap-5 w-full ">
              <div className="flex flex-col flex-1 md:flex-[2] gap-1 w-full">
                <label>Your Name </label>
                <input
                  className=" h-12 bg-[#343434] rounded-lg outline-none pl-3 "
                  type="text"
                />
              </div>
              <div className="flex flex-col flex-1 md:flex-[5] gap-1">
                <label>Your Email </label>
                <input
                  className=" h-12 bg-[#343434] rounded-lg outline-none pl-3 "
                  type="text"
                />
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col flex-[5 ] gap-1 ">
              <label>Your Subject </label>
              <input
                className=" h-12 bg-[#343434] rounded-lg outline-none pl-3 "
                type="text"
              />
            </div>
            <div className="flex flex-col flex-[5] gap-1">
              <label>Your Massage </label>
              <textarea className="h-40 bg-[#343434] rounded-lg outline-none pl-3 " />
            </div>
            <button
              disabled={isButtonDisabled}
              className="bg-primary-100 self-end rounded-xl h-14 w-28 text-primary-200 font-semibold text-xl flex justify-center items-center gap-2"
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
