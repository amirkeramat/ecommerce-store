import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="bg-white/50 font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {data?.label}
        </div>
      </div>
      <div className="relative aspect-square md:aspect-[2.4/1] overflow-hidden">
        <Image src={data.imageUrl} fill alt="billboard-image" className="object-contain object-center " />
      </div>
    </div>
  );
};

export default Billboard;
