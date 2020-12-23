import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  console.log(req.headers);
  res.status(200).send("great!");
}
