import React from "react";
import ProductCard from "@/components/ProductCard";

export const page = () => {
  return (
    <div className="bg-white min-h-screen px-40 pt-20">
      <p className="text-black flex flex-col justify-center items-center ">
        <h1 className="text-center mb-2">
          A way for the user to filter out products based on keywords
        </h1>
        <p className=" text-center">
          the user would be able to click on the products and visit the
          respective page
        </p>
      </p>
      <div className="flex flex-wrap justify-center gap-10 pt-40 pb-40">
        <ProductCard
          name={"One Laptop"}
          description={"Trust me bro just buy this one"}
          url={"/products/1"}
        />
        <ProductCard
          name={"The other laptop"}
          description={"Nah Buy this, this is lit"}
          url={"/products/2"}
        />
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
