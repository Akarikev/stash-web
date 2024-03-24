import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black  text-white w-full">
      <footer className="flex flex-col ">
        {/* First Footer */}
        <div className="flex  flex-col lg:flex-row lg:justify-between gap-3 pt-4 lg:pt-10 md:px-10 lg:px-24 px-4">
          {/* products */}
          <div className="flex flex-col gap-y-1  font-semibold">
            <h1 className="text-[#939393]">Products</h1>
            <Link href={""} className="">
              Point of Sale
            </Link>
            <Link href={""} className="">
              Hardware
            </Link>
          </div>
          {/* Resources  */}
          <div className="flex flex-col gap-y-1 font-semibold">
            <h1 className="text-[#939393] font-semibold">Resources</h1>
            <Link href={""} className="">
              Pricing
            </Link>
            <Link href={""} className="">
              Why Stash?
            </Link>
            <Link href={""} className="">
              Blog
            </Link>
          </div>
          {/*  contacts */}
          <div className="flex flex-col gap-y-1 font-semibold">
            {/* Main contacts */}
            <h1 className="text-[#939393] ">Contacts</h1>
            <div>
              <p>+233 540920557</p>
              <Link
                href={"mailto:support@stashterminal.com"}
                className="underline"
              >
                support@stashterminal.com
              </Link>
            </div>

            <div className="mt-4">
              <h1 className="text-[#939393] font-semibold">Company</h1>
              <Link href={""}>About</Link>
            </div>
          </div>
        </div>

        {/* Stores */}
        <div className="mt-10 lg:mt-20 md:mt-16 px-4 md:px-10 lg:px-24 flex gap-4 mb-6">
          <Link href={""}>
            <Image
              src={"/playstore 1.png"}
              width={102}
              height={30}
              alt="playstore"
              className="object-fit"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/ios 1.png"}
              width={93}
              height={31}
              alt="ios store"
              className="object-fit"
            />
          </Link>
        </div>

        {/* Second Footer */}
        <div className="border-t border-gray-400 flex lg:justify-between lg:flex-row flex-col px-2  md:px-10 pt-4  lg:px-24 font-semibold">
          <div className="flex lg:flex-row flex-col  gap-4 lg:mt-6">
            <Link href={""}>Terms of use</Link>
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>Merchant Agreement</Link>
          </div>
          <div className="lg:mt-6 mb-8 mt-4">
            <p>&copy; Stash Terminal 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
