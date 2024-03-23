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
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              {/* Software
Card Reader */}
              <NavigationMenuLink className="flex flex-col p-6">
                <Link href={""} className=" bg-gray-100">
                  Software
                </Link>
                <Link href={""}>Card Reader</Link>
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
