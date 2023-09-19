import { Category } from "@/types";
import axios from "axios";


const getCategory = async (id: string,storeId:string): Promise<Category> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;

  const res = await axios.get(`${URL}/${id}`);
  return res.data;
};

export default getCategory;
