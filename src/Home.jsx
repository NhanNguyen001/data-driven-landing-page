import React from "react";
import backgroundImage from "/home-background.svg"; // Import your background image
import rightImage from "/home-background-logo.svg"; // Import the right-side image

const Home = () => {
  return (
    <div
      className="relative grid grid-cols-12 min-h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content Section on the Left */}
      <section className="lg:col-span-5 md:col-span-12 sm:col-span-12 z-10 flex flex-col justify-center px-4 py-8 md:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-none">
          Big Data <br className="hidden md:inline" />
          <span className="text-indigo-600">Analytics Solutions</span>
        </h1>
        <p className="mt-3 text-lg text-gray-500 sm:text-xl md:mt-5">
          Unlock insights from all your data and build artificial intelligence
          (AI) solutions with ease.
        </p>
        <div className="mt-10 flex flex-wrap">
          <button
            href="#"
            className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg mr-4 hover:bg-indigo-700 transition duration-300 ease-in-out text-lg font-medium"
          >
            Get Started
          </button>
          <button
            href="#"
            className="inline-block bg-transparent border-2 border-indigo-600 text-indigo-600 py-3 px-6 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out text-lg font-medium"
          >
            View Demo
          </button>
        </div>
      </section>

      {/* Right Image Section */}
      <div
        className="md:col-span-9 lg:col-span-7 sm:hidden md:hidden lg:block absolute md:relative right-0 top-0 h-full"
        style={{
          backgroundImage: `url(${rightImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Home;
