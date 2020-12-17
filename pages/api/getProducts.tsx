import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { page, since } = req.query;
  console.log(page, since);
  
  function getMorePromise(i, sinceDate) {
    return axios(`http://${req.headers.host}/api/getProducts?since=${sinceDate}&page=${i}`);
  }
  
  const getData = async (hasPageRequest?, hasSinceDate?): Promise<unknown[]> => {
    try {
      const date = new Date();
      const twoYearsAgo = hasSinceDate || `${date.getFullYear() - 2}-${date.getMonth()}-${date.getDate()}`;
      
      const response = await axios({
        method: "get",
        url: `https://kidsliving.vendhq.com/api/products?since=${twoYearsAgo}${page ? `&page=${page}` : ""}&active=1&order_by=id&page_size`,
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer 5OtjwgBqfHJZh1Ed36qBb_JUDDKnjwlAJ7l8fBmg",
          "Content-Type": "application/json",
          "Cookie": "rguserid=b2b95383-16dd-4132-a3d2-f53bdec946bb; rguuid=true; rgisanonymous=true"
        }
      });
      
      const { pagination, products } = response.data;
      let additional_products = [];
      
      if (!hasPageRequest) {
        const { pages } = pagination;
        const promises = [];
        for (let i = 2; i <= pages; i++) {
          promises.push(getMorePromise(i, twoYearsAgo));
        }
  
        const test = await Promise.all(promises);
        additional_products = [
          ...test.reduce((acc, value): unknown[] => {
            acc = [...acc, ...value.data];
            return acc;
          }, [])
        ];
  
      }
  
      return [...products, ...additional_products];
  
    } catch ({ response }) {
      const { config } = response;
      console.log(config?.url);
    }
    return [];
  };
  
  const result: any = await getData(page, since);
  if (!page) {
    result.length = 1;
    /* sales = sales.reduce((acc, {register_sale_products}) => {
      register_sale_products.forEach(({name, product_id, quantity}) => {
        // @ts-ignore
        if (product_id in acc) {
          acc[product_id].quantity = +acc[product_id].quantity + +quantity
        } else {
          acc[product_id] = {name, quantity}
        }
      })
      return acc;
    }, { }) */
  }
  console.log(Array.isArray(result) ? result.length : Object.keys(result).length);
  res.status(200).json(result);
}
