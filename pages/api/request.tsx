import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const getData = async (): Promise<unknown[]> => {
    try {
      const date = new Date();
      const response = await axios({
        method: "get",
        url: `https://kidsliving.vendhq.com/api/register_sales?since=${date.getFullYear()}-0${date.getMonth() - 3}-${date.getDate()}`,
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer 5OtjwgBqfHJZh1Ed36qBb_JUDDKnjwlAJ7l8fBmg",
          "Content-Type": "application/json",
          "Cookie": "rguserid=b2b95383-16dd-4132-a3d2-f53bdec946bb; rguuid=true; rgisanonymous=true"
        }
      });
      
      const { pagination, register_sales } = response.data;
      console.log(pagination);
      
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return register_sales;
    } catch (err) {
      console.log(err);
    }
    return [];
  };
  
  const sales = await getData();
  
  res.status(200).send([sales.length]);
}
