"use client";
import React from "react";
import Cal from "@calcom/embed-react";

function StashTerminal() {
  return (
    <div className="mt-10 px-4 md:px-10 lg:px-24">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="lg:text-6xl mt-3 text-black font-extrabold text-center text-2xl tracking-tight">
            How stash terminal works
          </h1>

          <p className="text-center text-base lg:font-semibold mt-1 lg:text-2xl">
            See how easy it is with Stash Terminal
          </p>
        </div>

        {/* Video embed */}
        <div>
          <iframe
            src="https://www.youtube-nocookie.com/embed/ihE8OYTdklg?si=KQ4X7-RonQgXhodH&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="lg:w-[921px] lg:h-[509px] rounded-lg mt-3 w-[380px] h-[200px]"
          ></iframe>
        </div>

        {/* Cal embed */}
        <div className="mt-6">
          <h1 className="lg:text-6xl mt-3 text-black font-extrabold text-center text-2xl tracking-tight">
            Schedule a Demo
          </h1>

          <div className="border-4 border-black rounded-md">
            {/* <Cal
              calLink="rick/get-rick-rolled"
              className="w-[380px] lg:w-full "
            ></Cal> */}
            [cal edmbed heres]
          </div>
        </div>
      </div>
    </div>
  );
}

export default StashTerminal;
