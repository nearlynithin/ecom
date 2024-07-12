import React from "react";
import ProductCard from "@/components/ProductCard";

export const page = () => {
  return (
    <div className="bg-white min-h-screen px-40 pt-20">
      <p className="text-black">
        <h1>A way for the user to filter out products based on keywords</h1>
        the user would be able to click on the products and visit the respective
        page
      </p>
      <div className="flex flex-wrap justify-center gap-10 pt-40 pb-40">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default page;
