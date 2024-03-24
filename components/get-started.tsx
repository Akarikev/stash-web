import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

function GetStarted() {
  return (
    <div className="bg-[#C4EB47] w-full mt-14 ">
      <div className="flex flex-col justify-center items-center gap-4 p-8">
        <h1 className="lg:w-[951px] text-xl text-black md:text-2xl lg:text-6xl font-semibold   mt-8 lg:tracking-tighter tracking-tight text-center">
          Sign up and get a free contactless card reader
        </h1>

        <Link
          href={"/getstarted"}
          className={buttonVariants({
            variant: "default",
            size: "lg",
            className: "bg-black ",
          })}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
