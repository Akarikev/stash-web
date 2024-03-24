import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="mt-14 px-4 md:px-10 lg:px-24">
      <header>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-extrabold text-center tracking-tight ">
            Mobile Payments, Simplified!
          </h1>

          <p className="text-center text-sm mt-6 text-black font-semibold w-[374px] h-[42px] tracking-tight mb-8 ">
            Swipe, Tap, Succeed: Stash Turns Your Mobile Phone into the ultimate
            Point Of Sale Device.
          </p>

          {/* Image */}
          <Image
            src={"/stash-mobile.png"}
            alt="stash-mobile"
            width={426}
            height={452}
            loading="lazy"
            className=""
          />

          {/* Second header */}
          <div className="mt-24 flex flex-col justify-center items-center">
            <div>
              <h2 className="text-muted-foreground text-center lg:text-3xl md:text-2xl text-xl font-semibold mb-1">
                Minimize Costs
              </h2>
              <h1 className="text-black font-bold text-center lg:text-5xl text-2xl ">
                Maximize Revenue
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center mt-8">
              <div className="align-middle">
                {/* stash card */}
                <Image
                  src={"/stash-card.png"}
                  width={500}
                  height={600}
                  alt="stash-card"
                  className="w-full"
                />
              </div>

              <h3 className="text-center font-semibold text-black text-base tracking-normal   align-middle lg:w-[922px] lg:leading-normal lg:text-xl lg:h-[117px] mt-4 mb-4">
                Taking your business to scale requires it to accept payments
                <br />
                from all methods. Stash drives your expansion –
                <br />
                fast, safe, and cheap.
              </h3>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
