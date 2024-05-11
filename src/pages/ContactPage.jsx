import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <div className="text-center mb-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Get in touch with us
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            Send your enquiry now!
          </p>
        </div>
        <form className="w-full max-w-sm mt-5">
          <div className="flex items-center border-b border-blue-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Your email"
              aria-label="Your email"
            />
            <button
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm md:text-base lg:text-lg border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75"
          alt="placeholder"
          className="w-full h-auto md:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactPage;
