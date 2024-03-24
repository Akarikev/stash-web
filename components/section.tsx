import Image from "next/image";
import React from "react";

function Main() {
  return (
    <div className="bg-black  flex flex-col justify-center items-center ">
      <section className="mt-4 mb-4">
        <div className="flex lg:gap-x-[100px]">
          <div className="flex flex-col justify-center lg:px-6 px-2">
            {/* Text */}
            <h1 className="text-[#C4EB47] text-3xl font-bold lg:text-7xl  tracking-tighter">
              Swipe, Tap , Dip
            </h1>
            <p className="text-[#F3F3F3] text-xl tracking-tighter lg:tracking-normal lg:text-3xl mt-3">
              Accept credit and debit cards, gift cards, and contactless
              payments from anywhere.
            </p>
          </div>

          <div className="w-full">
            {/* Image */}
            <Image
              src={"/Cart Glass 8 1.png"}
              alt="image card"
              width={300}
              height={50}
              className="object-fit w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
