import axios from "axios";
import { Store } from "@/types";

const GetStores = async (): Promise<Store[]> => {
  const URL = "https://amirkeramat-ecommerce-dashboard.vercel.app/api/stores";

  const res = await axios.get(URL);
  return res.data;
};

export default GetStores;
