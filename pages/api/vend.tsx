import Base64 from "crypto-js/enc-base64";
import hex from "crypto-js/enc-hex";
import hmacSha256 from "crypto-js/hmac-sha256";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  console.log(JSON.stringify(req.body));
  const body = {
    offer: {
      sku: "test_sku",
      offer_id: -1,
      barcode: "test_barcode",
      leadtime_stock: [Array]
    },
    order_id: -1,
    total_selling_price: -1,
    warehouse: "test_warehouse",
    event_date: "2020-12-23T10:53:05.933928+02:00",
    order_item_id: -1,
    quantity: -1
  };
  console.log(req.headers);
  console.log(`https://tellmann.co.za/api/vend${body.toString()}`);
  console.log(Base64.stringify(hmacSha256(`https://tellmann.co.za/api/vend${JSON.stringify(req.body)}`, `8fac48e9737d41c5b9aa699fb00ae2e8`)));
  console.log(hex.stringify(hmacSha256(`https://tellmann.co.za/api/vend${JSON.stringify(req.body)}`, `8fac48e9737d41c5b9aa699fb00ae2e8`)));
  
  // console.log(crypto.createHmac('SHA256', `8fac48e9737d41c5b9aa699fb00ae2e8`).digest('hex'))
  res.status(200).send("great!");
}
