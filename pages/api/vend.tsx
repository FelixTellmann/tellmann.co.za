import crypto from "crypto-js";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  console.log(req.headers);
  console.log(crypto.createHmac("sha256", "8fac48e9737d41c5b9aa699fb00ae2e8"));
  res.status(200).send("great!");
}
