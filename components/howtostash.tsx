import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

function HowToStash() {
  return (
    <div className="p-4 flex flex-col  mt-9 md:px-10 lg:px-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-muted-foreground text-xl text-center lg:text-2xl">
          How to get started{" "}
        </h1>
        <h1 className="lg:text-5xl mt-3 text-black font-bold text-center text-xl tracking-tight">
          Get started 3 in steps
        </h1>

        <p className="text-center font-semibold mt-4 lg:text-2xl lg:w-[922px] lg:h-[117px]">
          Taking your business to scale requires it to accept payments from all
          methods. Stash drives your expansion – fast, safe, and cheap.
        </p>
      </div>
      {/* Image */}
      <div className="flex justify-center items-center">
        <Image
          src={"/howtostash.png"}
          alt="how to stash"
          width={871}
          height={412}
          className="object-fit"
        />
      </div>

      <div className="mt-4">
        <div>
          <h1 className="text-muted-foreground font-semibold text-xl mt-3 mb-4 md:text-2xl lg:text-2xl">
            Software
          </h1>
          <div className="lg:w-[971px] ">
            <h1 className="text-xl text-black md:text-2xl lg:text-7xl font-extrabold lg:tracking-tighter tracking-tight">
              Accept Payments with just your phone{" "}
            </h1>

            <p className="lg:mt-5  lg:w-[550px]  lg:font-bold lg:text-xl  tracking-tight">
              Powered with our software point of sale platform
            </p>
          </div>
        </div>
      </div>

      <div className="mt-9 ">
        <div className="flex gap-4">
          <Link
            href={""}
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "bg-black",
            })}
          >
            Get Started
          </Link>

          <div className="flex gap-4">
            <Image
              src={"/Line 5.png"}
              alt="line"
              width={2}
              height={0}
              className="h-11"
            />

            <Link href={""}>
              <Image
                src={"/google 2.png"}
                alt="stash google playstore"
                width={50}
                height={50}
                className="object-fit"
              />
            </Link>
            <Link href={""}>
              <Image
                src={"/appstore 2.png"}
                alt="apple store"
                width={47}
                height={40}
                className="object-fit"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Multiple Payments  */}

      <div className="bg-#F4F4F4 rounded-md">
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
}

export default HowToStash;
