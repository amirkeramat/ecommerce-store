"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { useState } from "react";

import { MenuIcon, X ,StoreIcon,HomeIcon, ShoppingBag,Tally4} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const { storeId } = useParams();
  const [toggle, setToggle] = useState(false);

  const routes = data.map((route) => ({
    href: `/${storeId}/category/${route.id}`,
    label: route.name,
    active: pathname === `/${storeId}/category/${route.id}`,
  }));

  return (
    <nav className="w-full">
      <MenuIcon
        onClick={() => setToggle(true)}
        className="block  cursor-pointer me-auto"
      />
      <div
        onClick={() => setToggle(false)}
        className={`fixed bg-black/25 inset-0 z-40 ${
          toggle ? "block" : "hidden"
        } `}
      />
      <div
        className={`
          flex flex-col items-start space-y-4  overflow-y-auto   fixed left-0 top-0 bottom-0 z-50 bg-white dark:bg-zinc-900  mx-0 duration-300 ${
            toggle ? "w-[200px]" : "w-0"
          }`}
      >
        <X
          onClick={() => setToggle(false)}
          className="w-6 h-6 mx-4 mt-2 cursor-pointer"
        />

        <div className="w-full h-0.5 bg-black/25" />
        <Link
          onClick={() => setToggle(false)}
          href={`/${storeId}`}
          className="ml-4 flex justify-between lg-ml-0 gap-x-2"
        >
          <HomeIcon />

          <p className="font-bold text-lg hover:text-gray-300  duration-200">
            Home
          </p>
        </Link>
        <div className="w-full h-0.5 bg-black/25" />
        <h3 className=" flex items-center text- font-bold ms-4 w-full text-left">
          <Tally4 />
          Categories
        </h3>
        {routes.map((route) => (
          <Link
            onClick={() => setToggle(false)}
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary px-4 pt-2",
              route.active
                ? "text-black text-xl font-bold underline underline-offset-8 dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
        <Link
          onClick={() => setToggle(false)}
          href={`/${storeId}/cart`}
          className="ml-4 flex items-center gap-x-2 pt-24"
        >
          <ShoppingBag className="w-4 h-4" />

          <p className="font-bold text-lg text-neutral-500 whitespace-nowrap">
            Cart
          </p>
        </Link>
        <Link
          onClick={() => setToggle(false)}
          href={`/`}
          className="ml-4 flex items-center  gap-x-2"
        >
          <StoreIcon className="w-4 h-4" />

          <p className="font-bold text-lg text-neutral-500 whitespace-nowrap">
            Change Store
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
