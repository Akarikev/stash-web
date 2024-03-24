import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

function HowToStash() {
  return (
    <div className="p-4 flex flex-col  mt-10 md:px-10 lg:px-24">
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
      <div className="flex justify-center items-center mt-8">
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
          <h1 className="text-muted-foreground font-semibold text-xl mt-20 mb-4 md:text-2xl lg:text-2xl">
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

      <div className="bg-gray-300/100 rounded-md mt-8 p-4 lg:px-16 lg:pt-10">
        <div>
          <h1 className="font-extrabold text-xl lg:text-7xl tracking-tighter lg:w-[702px]">
            Multiple payment channels
          </h1>

          <p className="font-semibold mt-2 tracking-tight lg:w-[739.31px] lg:text-xl">
            Most POS devices accept only card payments. Stash Terminal provides
            several channels through which customers can pay.
          </p>

          <div className="flex gap-6">
            <Image
              src={"/payments-options.png"}
              width={250}
              height={10}
              alt="payments options"
              className="object-contain lg:w-[300px] lg:h-[55px] "
            />

            <Image
              src={"/apple-pay 1.png"}
              width={60}
              height={10}
              alt="payments options"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Hardware */}
      <div className="">
        <h1 className="text-muted-foreground font-semibold text-xl mt-20 mb-4 md:text-2xl lg:text-2xl tracking-tighter">
          Hardware
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className=" ">
            <h1 className="text-2xl lg:w-[971px] text-black md:text-2xl lg:text-6xl font-bold lg:tracking-tighter tracking-tight text-center">
              Swipe, Tap, Dip
              <br />
              One device for all{" "}
            </h1>
          </div>

          <p className="lg:mt-5 mt-2 lg:w-[550px]  lg:font-bold lg:text-xl text-center  tracking-tight font-semibold">
            Powered with our software point of sale platform
          </p>

          <Image
            src={"/stashdetails.png"}
            alt="stash details"
            width={826}
            height={523}
            className="object-contain"
          />
        </div>
      </div>

      <div className="bg-gray-300/100 rounded-md mt-8 p-4 lg:px-16 lg:pt-10">
        <div>
          <h1 className="font-extrabold text-xl lg:text-7xl tracking-tighter ">
            Received with any card
          </h1>

          <p className="font-semibold mt-2 tracking-tight  lg:text-xl">
            We support all major global cards.
          </p>

          <div className="flex items-center gap-8">
            <Image
              src={"/cards.png"}
              width={200}
              height={100}
              alt="payments options"
              className="object-contain lg:w-[528px] lg:h-[129px]"
            />

            <Image
              src={"/discover.png"}
              width={100}
              height={60}
              alt="payments options"
              className="object-contain lg:w-[210px] lg:h-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToStash;
