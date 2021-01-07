import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type CustomerData = {
  product_name: string
  date: string
  quantity: string
  customer_name: string
  email: string
  mobile: string
  phone: string
  
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { page, since, id } = req.query;
  
  function getMorePromise(i, sinceDate) {
    const promise = axios(`http://${req.headers.host}/api/getProductSalesCustomer?since=${sinceDate}&page=${i}&page_size=200`);
    return promise;
  }
  
  const getData = async (hasPageRequest?, hasSinceDate?): Promise<unknown[]> => {
    try {
      /* const date = new Date();
      const threeMonthAgo = hasSinceDate || `${date.getFullYear()}-${date.getMonth() - 3}-${date.getDate()}`;
      console.log(threeMonthAgo) */
      
      const date = new Date();
      date.setMonth(date.getMonth() - 3);
      // const twoYearsAgo = hasSinceDate || `${date.getFullYear() - 2}-${date.getMonth()}-${date.getDate()}`;
      
      const threeMonthAgo = hasSinceDate || date.toISOString().split("T")[0];
      
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
          promises.push(getMorePromise(i, threeMonthAgo));
        }
        
        const test = await Promise.all(promises);
        additional_sales = test.reduce((acc: unknown[], value) => {
          acc = [...acc, ...value.data];
          return acc;
        }, []);
        
      }
      return [...register_sales, ...additional_sales];
    } catch (err) {
      console.log(err);
    }
    return [];
  };
  
  let sales: any = await getData(page, since);
  
  if (!page) {
    sales = sales.reduce((acc: CustomerData[], {
      register_sale_products,
      sale_date,
      customer: { name: customer_name, email, phone, mobile }
    }) => {
      register_sale_products.forEach(({ name, product_id, quantity }) => {
        if (product_id === id) {
          acc.push({
            product_name: name,
            date: sale_date.split(" "),
            quantity,
            customer_name,
            email,
            mobile,
            phone
          });
        }
      });
      return acc;
    }, []);
  }
  
  res.status(200).json(sales);
}
