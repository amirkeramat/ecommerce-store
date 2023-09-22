import { Banner as BannerType } from "@/types";
import Image from "next/image";

interface BannerProps {
  data: BannerType;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      {!data ? (
        <div className="flex justify-center items-center p-6">
          <Image
            width={200}
            height={600}
            alt="no-banner-img"
            src={"/vercel.svg"}
          />
        </div>
      ) : (
        <div className="relative aspect-square md:aspect-[2.4/1] overflow-hidden">
          <Image
            src={data.imageUrl}
            fill
            alt="banner-image"
            className="object-fill object-center "
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
