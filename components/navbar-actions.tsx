"use client";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { Moon, ShoppingBag, Sun, SunMoon } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useParams, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
const NavbarActions = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { storeId } = useParams();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  const setThemeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mr-auto flex items-center gap-x-4 ms-4">
      <Button
        onClick={setThemeHandler}
        className="flex items-center rounded-full  px-4 py-2 "
      >
        {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
      </Button>
      <Button
        onClick={() => router.push(`/${storeId}/cart`)}
        className="flex items-center rounded-full  px-4 py-2 "
      >
        <ShoppingBag size={20} />
        <span className="text-sm ml-2 font-medium e">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
