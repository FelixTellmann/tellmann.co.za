import { query } from "lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

type GetVwFordDataData = {
  message?: string;
};

export const getTrims = async (
  req: NextApiRequest,
  res: NextApiResponse<GetVwFordDataData>
): Promise<void> => {
  const { make, model, year_start, year_end } = req.query;
  try {
    const results = await query(
      `SELECT DISTINCT model_trim, model_engine_fuel  FROM CARLIST WHERE model_make_id = ? AND model_name = ? AND model_year >= ? AND model_year <= ?`,
      [String(make), String(model), String(year_start), String(year_end)]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default getTrims;
