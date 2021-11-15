import axios from "axios";
import { allowCors } from "lib/allowCors";
import type { NextApiRequest, NextApiResponse } from "next";

type IndexFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const Index: IndexFunction = async (req, res) => {
  console.log(req);
  console.log(JSON.stringify(req.headers));
  const test = await axios({
    url: `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.CURRENCY_API}&base_currency=ZAR`,
  });

  res
    .status(200)
    .json({
      country: req.headers["x-vercel-ip-country"],
      exchangeRate: test?.data?.data?.USD ?? undefined,
    });
};

export default allowCors(Index);
