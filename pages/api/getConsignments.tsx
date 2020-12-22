import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type ConsignmentProductsData = {
  [key: string]: {
    name: string[]
    count: number
    consignment_id: string[]
  }
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { page, since } = req.query;
  
  function getMorePromise(i, sinceDate) {
    return axios(`http://${req.headers.host}/api/getConsignments?since=${sinceDate}&page=${i}`);
  }
  
  function getConsignmentProducts(id, name) {
    return axios(`http://${req.headers.host}/api/getConsignmentProducts?id=${id}&name=${name}`);
  }
  
  const getData = async (hasPageRequest?, hasSinceDate?): Promise<unknown[]> => {
    try {
      const date = new Date();
      const fiveMonthAgo = hasSinceDate || `${date.getFullYear()}-${date.getMonth() - 5}-${date.getDate()}`;
      
      const response = await axios({
        method: "get",
        url: `https://kidsliving.vendhq.com/api/consignment?since=${fiveMonthAgo}${page ? `&page=${page}` : ""}&page_size=200`,
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer 5OtjwgBqfHJZh1Ed36qBb_JUDDKnjwlAJ7l8fBmg",
          "Content-Type": "application/json",
          "Cookie": "rguserid=b2b95383-16dd-4132-a3d2-f53bdec946bb; rguuid=true; rgisanonymous=true"
        }
      });
      
      const { pagination, consignments } = response.data;
      let additional_consignments = [];
      
      if (!hasPageRequest) {
        const { pages } = pagination;
        const promises = [];
        for (let i = 2; i <= pages; i++) {
          promises.push(getMorePromise(i, fiveMonthAgo));
        }
        
        const test = await Promise.all(promises);
        additional_consignments = test.reduce((acc, value): unknown[] => {
          acc = [...acc, ...value.data];
          return acc;
        }, []);
        
      }
      
      return [...consignments, ...additional_consignments];
      
    } catch (err) {
      console.log(err);
    }
    return [];
  };
  
  let consignments: any = await getData(page, since);
  let consignment_products = [];
  
  if (!page) {
    consignments = consignments.filter(({ status }) => status === `OPEN`);
    const promises = consignments.map(({ id, name }) => getConsignmentProducts(id, name));
    consignment_products = await Promise.all(promises);
    consignment_products = consignment_products.reduce((acc: ConsignmentProductsData, value) => {
      
      value?.data?.forEach(({ id, count, name, consignment_id }) => {
        if (id in acc) {
          acc[id].count = +acc[id].count + +count;
          acc[id].name.push(name);
          acc[id].consignment_id.push(consignment_id);
        } else {
          acc[id] = { count: +count, name: [name], consignment_id: [consignment_id] };
        }
      });
      
      return acc;
    }, {});
  }
  
  res.status(200).json(consignment_products.length === 0 ? consignments : consignment_products);
}
