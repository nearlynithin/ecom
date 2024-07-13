import React from "react";

const HomeContent2 = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className=" bg-white min-h-screen flex flex-col w-full p-6 justify-center items-center">
        <div className="px-20 mb-8 text-gray-900 text-9xl font-ostrich font-thin hover:animate-pulse">
          <a href="https://github.com/nearlynithin/ecom">The Ecom. Website </a>
        </div>
        <div className=" text-cyan-800 text-3xl font-sans">
          <p>
            Purchase here and regret{" "}
            <span className="font-playwrite">instantly</span>
          </p>
        </div>
        <div className=" text-gray-800 text-2xl font-sans mt-20 justify-center space-x-8">
          <a href="search" className="underline hover:text-blue-600">
            Products
          </a>
          <a href="signup" className="underline hover:text-blue-600">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeContent2;
