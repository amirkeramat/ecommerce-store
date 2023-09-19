import { Billboard } from "@/types";
import axios from "axios";


const getBillboard = async (id: string,storeId:string): Promise<Billboard> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/billboards`;

  
  const res = await axios.get(`${URL}/${id}`);
  return res.data
};

export default getBillboard;
