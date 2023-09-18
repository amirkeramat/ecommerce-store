import { Product } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  
  const res = await axios.get(`${URL}/${id}`);
  return res.data
};

export default getProduct;
