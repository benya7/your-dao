import { NextApiRequest, NextApiResponse } from "next";
import { DAOS } from "../../../lib/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    res.status(200).json(DAOS);

}