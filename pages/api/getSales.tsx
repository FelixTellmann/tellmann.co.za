import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { page, since } = req.query;
  console.log(page, since);
  
  function getMoreSales(i, sinceDate) {
    const promise = axios(`http://${req.headers.host}/api/getSales?since=${sinceDate}&page=${i}`);
    return promise;
  }
  
  const getData = async (hasPageRequest?, hasSinceDate?): Promise<unknown[]> => {
    try {
      const date = new Date();
      const threeMonthAgo = hasSinceDate || `${date.getFullYear()}-${date.getMonth() - 3}-${date.getDate()}`;
      
      const response = await axios({
        method: "get",
        url: `https://kidsliving.vendhq.com/api/register_sales?since=${threeMonthAgo}${page ? `&page=${page}` : ""}`,
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer 5OtjwgBqfHJZh1Ed36qBb_JUDDKnjwlAJ7l8fBmg",
          "Content-Type": "application/json",
          "Cookie": "rguserid=b2b95383-16dd-4132-a3d2-f53bdec946bb; rguuid=true; rgisanonymous=true"
        }
      });
      
      const { pagination, register_sales } = response.data;
      let additional_sales = [];
      
      if (!hasPageRequest) {
        const { pages } = pagination;
        const promises = [];
        for (let i = 2; i <= pages; i++) {
          promises.push(getMoreSales(i, threeMonthAgo));
        }
        
        console.log(promises);
        const test = await Promise.all(promises);
        additional_sales = [
          ...test.reduce((acc, value): unknown[] => {
            acc = [...acc, ...value.data];
            return acc;
          }, [])
        ];
        /* for (let i = 2; i <= pages; i++) {
          // eslint-disable-next-line no-await-in-loop
          const { data } = await axios(`http://${req.headers.host}/api/getSales?since=${threeMonthAgo}&page=${i}`);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          additional_sales = [...additional_sales, ...data];
        } */
      }
      
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return [...register_sales, ...additional_sales];
      
    } catch (err) {
      console.log(err);
    }
    return [];
  };
  
  let sales: any = await getData(page, since);
  if (!page) {
    sales = sales.reduce((acc, { register_sale_products }) => {
      register_sale_products.forEach(({ name, product_id, quantity }) => {
        // @ts-ignore
        if (product_id in acc) {
          acc[product_id].quantity = +acc[product_id].quantity + +quantity;
        } else {
          acc[product_id] = { name, quantity };
        }
      });
      return acc;
    }, {});
  }
  console.log(Array.isArray(sales) ? sales.length : Object.keys(sales).length);
  res.status(200).json(sales);
}
