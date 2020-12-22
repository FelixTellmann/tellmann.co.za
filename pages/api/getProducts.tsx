import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type ProductData = {
  id: string
  inventory_cpt: number
  inventory_jhb: number
  inventory_total: number
  name: string
  variant_parent_id?: string
  has_variants: boolean
  source_id?: string
  variant_source_id?: string
  tags?: string
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { page, since } = req.query;
  
  function getMorePromise(i, sinceDate) {
    return axios(`http://${req.headers.host}/api/getProducts?since=${sinceDate}&page=${i}`);
  }
  
  const getData = async (hasPageRequest?, hasSinceDate?): Promise<any[]> => {
    try {
      const date = new Date();
      const twoYearsAgo = hasSinceDate || `${date.getFullYear() - 2}-${date.getMonth()}-${date.getDate()}`;
      
      const response = await axios({
        method: "get",
        url: `https://kidsliving.vendhq.com/api/products?since=${twoYearsAgo}${page
                                                                               ? `&page=${page}`
                                                                               : ""}&active=1&order_by=id&page_size=200`,
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
        additional_products = test.reduce((acc: unknown[], value) => {
          acc = [...acc, ...value.data];
          return acc;
        }, []);
  
      }
      
      return [...products, ...additional_products];
      
    } catch ({ response }) {
      const { config } = response;
    }
    return [];
  };
  
  let products: any = await getData(page, since);
  
  if (!page) {
    products = products.reduce((acc: ProductData[], {
      id,
      inventory,
      name,
      variant_parent_id,
      has_variants,
      source_id,
      variant_source_id,
      tags
    }) => {
      
      let inventory_cpt = 0;
      let inventory_jhb = 0;
      let inventory_total = 0;
      
      if (inventory) {
        inventory.forEach(({ outlet_name, count }) => {
          inventory_total += +count;
          if (outlet_name === `Cape Town Kids Living`) {
            inventory_cpt = +count;
          } else {
            inventory_jhb = +count;
          }
        });
      }
      
      acc = [
        ...acc,
        { id, inventory_total, inventory_cpt, inventory_jhb, name, variant_parent_id, has_variants, source_id, variant_source_id, tags }
      ];
      return acc;
    }, []);
    
    /* products.length = 60 */
  }
  
  res.status(200).json(products);
}
