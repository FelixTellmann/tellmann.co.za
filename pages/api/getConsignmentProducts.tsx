import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id, name } = req.query;
  
  const getData = async (): Promise<unknown[]> => {
    try {
      const response = await axios({
        method: "get",
        url: `https://kidsliving.vendhq.com/api/consignment_product?consignment_id=${id}&page_size=200`,
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer 5OtjwgBqfHJZh1Ed36qBb_JUDDKnjwlAJ7l8fBmg",
          "Content-Type": "application/json",
          "Cookie": "rguserid=b2b95383-16dd-4132-a3d2-f53bdec946bb; rguuid=true; rgisanonymous=true"
        }
      });
      
      let { consignment_products } = response.data;
      
      consignment_products = consignment_products.map(({ product_id, count, consignment_id }) => {
        return { id: product_id, count: +count, consignment_id, name };
      });
      
      return consignment_products;
      
    } catch (err) {
      console.log(err);
    }
    return [];
  };
  
  const consignment_products: any = await getData();
  
  res.status(200).json(consignment_products);
}
