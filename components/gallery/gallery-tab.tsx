import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
        {({selected})=>(
            <div>
                <span className="absolute w-full h-full aspect-square inset-0 overflow-hidden rounded-md">
                    <Image
                    fill
                    src={image.url}
                    alt="image"
                    className="object-center object-cover"
                    />
                </span>
                <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2 transition ",
                selected ? "ring-black" : "ring-transparent"
                )} />
            </div>
        )}
    </Tab>
  );
};

export default GalleryTab;
