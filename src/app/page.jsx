"use client";
import { Suspense } from "react";
import React from "react";
import Button from "@components/Button";


export default function homePage(){
  return (
    <Suspense fallback={<Loading />}>
        <Button />   
    </Suspense>
  );
};



function Loading() {
  return <h1> Loading ...</h1>
}