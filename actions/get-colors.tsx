import { Color } from "@/types";
import axios from "axios";


const getColors = async (storeId:string): Promise<Color[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/colors`;

  const res = await axios.get(URL);
  return res.data;
};

export default getColors;
