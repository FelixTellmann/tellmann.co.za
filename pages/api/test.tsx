import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const date = new Date();
  date.setMonth(date.getMonth() - 3);
  const getData = async (url: string, version = "", keys?: string[]): Promise<unknown[]> => {
    try {
      const response = await axios({
        method: "get",
        url: `${url}${version}`,
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer 5OtjwgBqfHJZh1Ed36qBb_JUDDKnjwlAJ7l8fBmg",
          "Content-Type": "application/json",
          "Cookie": "rguserid=b2b95383-16dd-4132-a3d2-f53bdec946bb; rguuid=true; rgisanonymous=true"
        }
      });
      
      let { data } = response.data;
      
      if (keys) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        data = data.map(x => {
          const returnObj = {};
          keys.forEach((k) => {
            returnObj[k] = x[k];
          });
          return { ...returnObj };
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      }
      
      if (version < response.data.version.max) {
        data = [...data, ...await getData(url, String(+response.data.version.max + 1), keys)];
      }
      
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return data;
    } catch (err) {
      console.log(err);
    }
    return [];
  };
  
  const sales = (await getData(`https://kidsliving.vendhq.com/api/2.0/sales?page_size=30000&after=`, "0", [
    "id",
    "status",
    "updated_at"
  ])).filter(({ updated_at }) => new Date(updated_at) > date);
  
  console.log(sales.length);
  res.status(200).send(/* JSON.stringify(data, null, 4) */[/* products.length, tags.length, */ /* consignments.length, */  sales.length]);
}
