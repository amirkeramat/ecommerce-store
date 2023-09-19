import axios from "axios";
import { Store } from "@/types";

const GetStores = async (): Promise<Store[]> => {
  const URL = "http://localhost:3000/api/stores";

  const res = await axios.get(URL);
  return res.data;
};

export default GetStores;
