import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="w-full relative aspect-square md:aspect-[2.4/1] overflow-hidden">
        <Image src={data.imageUrl} fill alt="billboard-image" className="object-contain object-center " />
      </div>
    </div>
  );
};

export default Billboard;
