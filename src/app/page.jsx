import React from "react";

export const page = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex justify-center items-center">
        <h1 className="mb-9">
          {/* <h1 className="mb-4  font-extrabold text-6xl  text-transparent bg-clip-text bg-gradient-to-r  from-sky-900 to-white">
            Nithin
          </h1> */}
          <h1 className="animate-text bg-gradient-to-r from-teal-400  to-slate-50 bg-clip-text text-transparent text-5xl font-extrabold">
            Nithin
          </h1>
          <p className=" text-gray-800">
            Hello! My name is Nithin. I'm not much of "Frontend" guy despite
            having a "design" related background. Can't wait to ditch this and
            work on the backend instead :)
          </p>
          <p className="text-gray-800">
            It's been fairly simple so far, The Project Structure is very easy
            to understand.{" "}
          </p>
        </h1>
      </div>
    </>
  );
};

export default page;
