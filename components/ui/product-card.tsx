"use client";

import { MouseEventHandler } from "react";

import { Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";

import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { onOpen } = usePreviewModal();

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onOpen(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image */}
      <div className="aspect-square  rounded-xl bg-gray-100 relative ">
        <Image
          src={data?.images?.[0]?.url}
          alt="product-image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute z-50 w-full px-6 bottom-5">
          <div className=" flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* {Description} */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gary-500">{data.category?.name}</p>
      </div>
      {/* {price} */}
      <div className="flex item-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
