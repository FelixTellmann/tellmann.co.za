import { allowCors } from "lib/allowCors";
import type { NextApiRequest, NextApiResponse } from "next";

type IndexFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const Index: IndexFunction = async (req, res) => {
  console.log(req);
  console.log(JSON.stringify(req.headers));
  res.status(200).json(req.headers["x-vercel-ip-country"]);
};

export default allowCors(Index);
