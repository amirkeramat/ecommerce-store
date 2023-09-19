import axios from "axios";
import qs from "query-string";

import { Product } from "@/types";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query,storeId:string): Promise<Product[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;

  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await axios.get(url);
  return res.data;
};

export default getProducts;
