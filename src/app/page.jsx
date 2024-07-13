"use client";
import React from "react";
import HomeContent from "@/components/homeComponent";
import HomeContent2 from "@/components/homeComponent2";
import { useState } from "react";

export const homePage = () => {
  const [showShop, setShowShop] = useState(true);

  const swapComponent = () => {
    setShowShop(!showShop);
  };
  return (
    <div className="bg-white min-h-screen">
      <div className="flex  justify-end">
        <button
          onClick={swapComponent}
          className="mx-20 mt-20 flex items-center justify-center w-24 h-12 bg-gray-100 text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-300 "
        >
          Click here
        </button>
      </div>
      <div className="mt-4">
        {showShop ? <HomeContent2 /> : <HomeContent />}
      </div>
    </div>
  );
};

export default homePage;
