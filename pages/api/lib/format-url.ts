import { BASEURL } from './constants';

export default function formatUrl(
  chainId: string,
  address: string,
  path: string,
) {
  return `${BASEURL}/${chainId}/address/${address}/${path}/`
}