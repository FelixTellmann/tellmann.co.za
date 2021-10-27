import { query } from "lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

type GetVwFordDataData = {
  message?: string;
};

export const getYears = async (
  req: NextApiRequest,
  res: NextApiResponse<GetVwFordDataData>
): Promise<void> => {
  const { make, model } = req.query;
  try {
    const results = await query(
      `SELECT DISTINCT model_year FROM CARLIST WHERE model_make_id = ? AND model_name = ?`,
      [String(make), String(model)]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default getYears;
