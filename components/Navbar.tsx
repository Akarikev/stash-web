"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import ProductMenu from "./product-menu";
import { buttonVariants } from "./ui/button";

interface NavbarProps {
  //   todo: add props
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="mt-6  px-4 md:px-10 lg:px-24">
      <div>
        <nav className="flex justify-between ">
          {/* Logo */}
          <div>
            <Image
              src={"/stash-logo.png"}
              width={43}
              height={44}
              alt="stash-web-logo"
            />
          </div>

          {/* Links */}

          <div className="flex  lg:gap-6 justify-center items-center md:ml-3 lg:ml-5">
            <ProductMenu />
            <Link
              href={"#demo"}
              className={buttonVariants({
                variant: "link",
              })}
            >
              Demo
            </Link>
            <Link
              href={""}
              className={buttonVariants({
                variant: "default",
                className: "ml-3 bg-black",
              })}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
