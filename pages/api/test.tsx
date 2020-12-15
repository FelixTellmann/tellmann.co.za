import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  
  const getData = async (url, version = "", keys?: string[]): Promise<unknown[]> => {
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
      console.log(response.data.version.max);
    
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
  
  const tags = (await getData(`https://kidsliving.vendhq.com/api/2.0/tags?after=`, "0", ["name"]));
  console.log(tags);
  const products = (await getData(`https://kidsliving.vendhq.com/api/2.0/products?after=`, "0", [
    "active",
    "id"
  ])).filter(({ active }) => active);
  console.log(products);
  const consignments = (await getData(`https://kidsliving.vendhq.com/api/2.0/consignments?after=`, "0")).filter(({ status }) => status !== "RECEIVED");
  console.log(consignments.length);
  const sales = (await getData(`https://kidsliving.vendhq.com/api/2.0/sales?after=`, "0"));
  console.log(sales.length);
  res.status(200).send(/* JSON.stringify(data, null, 4) */[products.length, tags.length, consignments.length, sales.length]);
}
