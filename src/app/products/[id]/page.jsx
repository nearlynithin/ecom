"use client";
import { usePathname } from "next/navigation";

export default function Post() {
  const pathname = usePathname();
  return (
    <>
      <h1>All the products would be assigned a unique id.</h1>
      <p>URL for the current product is : {pathname}</p>
    </>
  );
}
