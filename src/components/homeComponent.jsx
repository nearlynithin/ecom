import React from "react";

export const HomeContent = () => {
  return (
    <>
      <div className="px-20  bg-white min-h-screen flex justify-center items-center">
        <div className="mb-9">
          <h1 className="mb-8  font-extrabold text-6xl  text-transparent bg-clip-text bg-gradient-to-r  from-teal-400 to-white">
            Nithin
          </h1>
          <p className=" text-gray-500 font-mono hover:text-gray-800 cursor-pointer transform transition hover:scale-105 mb-2">
            Hello! My name is Nithin. I'm not much of "Frontend" guy despite
            having a "design" related background. Can't wait to ditch this and
            work on the{" "}
            <a href="https://go.dev/" target="_blank">
              backend
            </a>{" "}
            instead :)
          </p>
          <p className="text-gray-500 font-mono hover:text-gray-800 cursor-pointer transform transition hover:scale-105">
            It's been fairly simple so far, The Project Structure is very easy
            to understand.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
