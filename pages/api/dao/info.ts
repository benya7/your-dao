import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { DAOS } from '../../../lib/constants';
import { BASEURL } from '../lib/constants';
import { formatUnits } from '@ethersproject/units';
import tokenConcentration from '../lib/token-concentration';
import { json } from 'stream/consumers';

axios.defaults.params = { key: process.env.COVALENT_API_KEY };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { address } = req.query;
  try {

    let daoItem = DAOS.filter(dao => dao.contract == address)[0];
    const responseInfo = await axios.get(`https://api.coingecko.com/api/v3/coins/${daoItem.name.toLowerCase()}`);
    const responseHolders = await axios.get(`${BASEURL}/${daoItem.chainId}/tokens/${address}/token_holders/?page-size=100000`)
    const {
      asset_platform_id,
      description: { en },
      links: { homepage, twitter_screen_name },
      market_data: { current_price, fully_diluted_valuation }

    } = responseInfo.data

    const holders: any[] = responseHolders.data.data.items.map((holder: any) => {
      return {
        address: holder.address,
        balance: {
          raw: holder.balance,
          formatted: holder.balance / 10 ** holder.contract_decimals
        }
      }
    })

    const gini = tokenConcentration(holders, current_price["usd"]);


    res.status(200).json({
      name: daoItem.name,
      logo: daoItem.logo,
      platform: asset_platform_id,
      description: en,
      homepage: homepage[0],
      twitter: {
        user: `@${twitter_screen_name}`,
        link: `https://twitter.com/${twitter_screen_name}`
      },
      price_token: current_price["usd"],
      fully_diluted_mkt_cap: (Math.round(parseInt(fully_diluted_valuation["usd"]) * 100) / 100).toLocaleString(),
      holders: {
        total: holders.length,
        top_50: holders.slice(0, 50),
        info: responseInfo.data
      },
      token_concentration: gini
    })

  } catch (error) {
    res.status(500).json(error)
  }
}