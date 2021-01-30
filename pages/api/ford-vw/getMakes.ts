import { query } from "lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

type GetVwFordDataData = {
  message?: string
}

export const GetModels = async (req: NextApiRequest, res: NextApiResponse<GetVwFordDataData>): Promise<void> => {
  try {
    const results = await query(`
      SELECT DISTINCT model_make_id FROM CARLIST
  `);
    
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default GetModels;