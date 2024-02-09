import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-4 mt-10 max-md:mt-5 lg:px-10 bg-gray-300 rounded-2xl">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-slate-800 sm:text-4xl lg:text-6xl lg:leading-tight pt-10">
          Welcome to
            <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {" "}CityConnect
            </span>
            : Your Gateway to Smarter City Living
          </h1>
          <p className="mt-10 text-lg text-gray-800 dark:text-gray-400">
          At CityConnect, we're dedicated to empowering residents and building a more connected community. Through our innovative CityConnect app, we're transforming urban living by facilitating seamless access to city services, enhancing safety and security, promoting green spaces, and fostering sustainability. Join us in shaping the future of our city, one connection at a time.
          </p>

          {/* Buttons */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <a
              href="/trending"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Get started
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>

          
        </div>
        <div className="mt-10 -mx-4 sm:mt-0 relative">
          <img
            className="mx-auto shadow-2xl rounded-2xl object-cover"
            style={{
              width: "calc(100% + 40px)",
              height: "calc(100% + 20px)",
              margin: "-20px",
            }}
            src="https://cdn.dribbble.com/users/1523313/screenshots/12678917/media/6aaea022816612ac8ca6c077dab94e3a.gif"
            alt="Product illustration"
          />
        </div>
      </div>
     
    </div>
  );
};

export default HeroSection;