import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center">
      <div
        className="h-[500px] w-[450px] bg-gradient-to-r from-[#6d2897] to-[#bb61c5] absolute 
        transform rotate-45 z-0 right-2 top-28 rounded-3xl"
      ></div>
      <Navbar />
    </div>
  );
}   