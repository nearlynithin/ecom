import React from "react";
import Image from "next/image";

const ProductCard = ({ name, description, url, productImage }) => {
  return (
    <a href={url} className="relative block">
      <div className="relative w-80 bg-white shadow rounded-2xl hover:border-slate-700 cursor-pointer transform transition hover:scale-105">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={productImage}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
          />
        </div>
        
        <div className="relative z-10 h-48 w-full flex flex-col justify-between p-4 bg-cover bg-center rounded-t-2xl">
          <div>
            <input type="checkbox" />
          </div>
          <div className="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 p-4 bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-600 font-medium">{name}</h1>
            <button className="text-gray-500 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-400 text-sm my-1">{description}</p>
          <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">
            Approved
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
