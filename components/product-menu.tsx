import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import React from "react";

export default function ProductMenu() {
  return (
    <div>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className="w-[200px] lg:w-[250px]">
              {/* Software
Card Reader */}
              <NavigationMenuLink className="flex flex-col gap-3 p-6 text-sm ">
                <Link
                  href={""}
                  className=" hover:bg-gray-100 w-full p-3 rounded-md"
                >
                  Software
                </Link>
                <Link href={""} className=" hover:bg-gray-100  p-3 rounded-md">
                  Card Reader
                </Link>
              </NavigationMenuLink>
              {/* <NavigationMenuLink>

              </NavigationMenuLink> */}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
