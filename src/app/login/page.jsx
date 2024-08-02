import React from "react";
import Login from "@components/Login";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-lime-900 pt-20 px-20 text-2xl font-medium ">
        You can login to your existing account here :)
      </h1>
      <p className="text-stone-700 flex justify-center mt-10 font-mono">
        Should also be redirected here if someone logs out
      </p>
      <Login />
    </div>
  );
};

export default page;
