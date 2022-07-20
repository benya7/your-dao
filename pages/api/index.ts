// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import formatUrl from './lib/format-url';



axios.defaults.params = { key: process.env.COVALENT_API_KEY };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse

) {



  const chainId = "1";
  const address = "0xa5Cf4DDFe4BfDbE712bD2f54EAadaCebb809fAED";
  const path = "balances_v2"
  const url = formatUrl(chainId, address, path);

  console.log(url)
  try {
    
    const response = await axios.get(url);
    console.log(response)
    res.status(200).json(response.data)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
