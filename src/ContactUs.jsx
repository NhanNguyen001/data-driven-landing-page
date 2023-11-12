import React from "react";
import leftImage from "/ContacUS-logo.svg";

const Contact = () => {
  return (
    <div className="relative grid grid-cols-12 min-h-full">
      {/* Left Image Section */}
      <div
        className="col-span-6 hidden sm:hidden md:block absolute md:relative right-0 top-0 h-full"
        style={{
          backgroundImage: `url(${leftImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Section on the Left */}
      <section className="lg:col-span-6 md:col-span-5 sm:col-span-12 z-10 flex flex-col justify-center px-4 py-8 md:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-none">
          <span className="text-indigo-600">CONTACT US</span>
        </h1>
        <p className="mt-3 text-lg text-gray-500 sm:text-xl md:mt-5">
          Unlock insights from all your data and build artificial intelligence
          (AI) solutions with ease.
        </p>
        <div className="mt-10 flex flex-wrap">
          <button
            href="#"
            className="inline-block bg-transparent border-2 border-indigo-600 text-indigo-600 py-3 px-6 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out text-lg font-medium"
          >
            View Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
