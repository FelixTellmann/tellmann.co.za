import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  
  function updateProducts(id, tags) {
    console.log([id, tags]);
    return axios({
      method: "post",
      url: `https://kidsliving.vendhq.com/api/products`,
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer 5OtjwgBqfHJZh1Ed36qBb_JUDDKnjwlAJ7l8fBmg",
        "Content-Type": "application/json",
        "Cookie": "rguserid=b2b95383-16dd-4132-a3d2-f53bdec946bb; rguuid=true; rgisanonymous=true"
      },
      data: JSON.stringify({ id, tags })
    });
  }
  
  const productsToUpdateArray = [];
  
  function getData(url) {
    return axios(`http://${req.headers.host}/api/${url}`);
  }
  
  try {
    const sales = await getData("getSales");
    const products = await getData("getProducts");
    const consignment_products = await getData("getConsignments");
    const parent_id_used = [];
    
    products.data.forEach(({ id, variant_parent_id, tags, source_id }) => {
      if (id === `0643ed1c-3397-6905-49aa-cbfa10f6b0fe` || id === `a9bbc48c-5c22-8c47-fd3d-fb1bb664341d` || variant_parent_id === `a9bbc48c-5c22-8c47-fd3d-fb1bb664341d` || id === `1de484e9-9f60-d610-e8bc-f4ed36abd8f6` || variant_parent_id === `1de484e9-9f60-d610-e8bc-f4ed36abd8f6`) {
        return;
      }
      const tagArray = tags.split(",").map((itm: string) => itm.trim());
      const oldTagArray = tags.split(",").map((itm: string) => itm.trim());
      let update = false;
      
      let hasSales = false;
      let incoming: boolean | number = false;
      let incomingId;
      
      if (variant_parent_id) {
        for (let i = 0; i < products.data.length; i++) {
          const { id: id2, variant_parent_id: variant_parent_id2 } = products.data[i];
          if (variant_parent_id === variant_parent_id2) {
            if (id2 in sales.data) {
              hasSales = id2;
            }
            if (id2 in consignment_products.data) {
              
              if (incoming === false) {
                incoming = +consignment_products.data[id2].count;
              } else {
                incoming += +consignment_products.data[id2].count;
              }
              
              incomingId = id2;
            }
          }
        }
      }
      
      if (id in sales.data || hasSales) {
        if (!tagArray.includes("FX_recent_sale")) {
          tagArray.push("FX_recent_sale");
          update = true;
        }
      } else if (tagArray.includes("FX_recent_sale")) {
        const index = tagArray.indexOf("FX_recent_sale");
        if (index > -1) {
          tagArray.splice(index, 1);
        }
        update = true;
      }
      
      if (id in consignment_products.data || incomingId) {
        if (!tagArray.includes("FX_incoming_stock")) {
          tagArray.push("FX_incoming_stock");
          tagArray.push(`FX_incoming_count__${incoming === 0 || incoming ? incoming : consignment_products.data[id]?.count}`);
          consignment_products.data[incomingId || id]?.name.forEach(name => {tagArray.push(`FX_incoming_name__${name}`);});
          update = true;
        }
        
        if (!tagArray.findIndex((itm: string) => itm.includes("FX_incoming_count__"))) {
          tagArray.push(`FX_incoming_count__${incoming === 0 || incoming ? incoming : consignment_products.data[id]?.count}`);
          update = true;
        }
        
        if (!tagArray.findIndex((itm: string) => itm.includes("FX_incoming_name__"))) {
          consignment_products.data[incomingId || id]?.name.forEach(name => {tagArray.push(`FX_incoming_name__${name}`);});
          update = true;
        }
        
        if (!tagArray.includes("FX_add_to_shopify") && !source_id) {
          tagArray.push("FX_add_to_shopify");
          update = true;
        }
        
      } else if (tagArray.includes("FX_incoming_stock")) {
        const index = tagArray.indexOf("FX_incoming_stock");
        if (index > -1) {
          tagArray.splice(index, 1);
        }
        
        const index3 = tagArray.findIndex((itm: string) => itm.includes("FX_incoming_count__"));
        if (index3 > -1) {
          tagArray.splice(index3, 1);
        }
        
        for (let i = 0; i < tagArray.length; i++) {
          const index2 = tagArray.findIndex((itm: string) => itm.includes("FX_incoming_name__"));
          if (index2 > -1) {
            tagArray.splice(index2, 1);
          } else {
            break;
          }
        }
        update = true;
      }
      
      if (tagArray.includes("FX_add_to_shopify") && source_id) {
        const index = tagArray.indexOf("FX_add_to_shopify");
        if (index > -1) {
          tagArray.splice(index, 1);
        }
        update = true;
      }
      
      if (tagArray.join(",").replace(/^,/, "") === oldTagArray.join(",").replace(/^,/, "")) {
        update = false;
      }
      console.log(tagArray.join(",").replace(/^,/, "") === oldTagArray.join(",").replace(/^,/, ""), tagArray.join(",").replace(/^,/, ""), oldTagArray.join(",").replace(/^,/, ""));
      if (update) {
        productsToUpdateArray.push([id, tagArray.join(",").replace(/^,/, "")]);
        if (variant_parent_id && variant_parent_id !== id && !parent_id_used.includes(variant_parent_id)) {
          productsToUpdateArray.push([variant_parent_id, tagArray.join(",").replace(/^,/, "")]);
          parent_id_used.push(variant_parent_id);
        }
      }
    });
    
    console.log(productsToUpdateArray.length);
    /* for (let i = 0; i < productsToUpdateArray.length; i++) {
      await updateProducts(productsToUpdateArray[i][0], productsToUpdateArray[i][1]);
    } */
    
    await Promise.all(productsToUpdateArray.map(([id, tags]) => updateProducts(id, tags)));
    /* const test = await Promise.all(productsToUpdateArray) */
    /* console.log(test.map(({data})=> data)) */
    console.log(productsToUpdateArray.length);
    res.status(200).json({ message: `success`, id_used: productsToUpdateArray.length });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Internal Server Error` });
  }
  
}
