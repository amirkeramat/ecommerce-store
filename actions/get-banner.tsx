import { Banner } from "@/types";
import axios from "axios";


const getBanners = async (storeId:string): Promise<Banner> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/banners`;
  
  const res = await axios.get(URL);
  return res.data
};

export default getBanners;
