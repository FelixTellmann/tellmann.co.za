import Base64 from "crypto-js/enc-base64";
import sha256 from "crypto-js/hmac-sha512";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  console.log(req.headers);
  console.log(Base64.stringify(sha256("sha256", `${JSON.stringify(req.body)}8fac48e9737d41c5b9aa699fb00ae2e8`)));
  res.status(200).send("great!");
}
