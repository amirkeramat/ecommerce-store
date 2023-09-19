import { Size } from "@/types";
import axios from "axios";


const getSizes = async (storeId:string): Promise<Size[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/sizes`;

  const res = await axios.get(URL);
  return res.data;
};

export default getSizes;
