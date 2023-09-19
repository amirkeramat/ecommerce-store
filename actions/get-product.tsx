import { Product } from "@/types";
import axios from "axios";

const getProduct = async (id: string, storeId: string): Promise<Product> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;

  const res = await axios.get(`${URL}/${id}`);
  return res.data;
};

export default getProduct;
