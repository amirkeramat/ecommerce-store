"use client";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useParams, useRouter } from "next/navigation";

const NavbarActions = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const {storeId} = useParams()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push(`/${storeId}/cart`)}
        className="flex items-center rounded-full bg-black px-4 py-2 "
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-sm ml-2 font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
