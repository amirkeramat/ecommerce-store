import { Category } from "@/types";
import axios from "axios";

const getCategories = async (storeId: string): Promise<Category[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;

  const res = await axios.get(URL);
  return res.data;
};

export default getCategories;
