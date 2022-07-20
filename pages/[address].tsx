import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DAOS } from "../lib/constants";
import Image from "next/image";
import Link from "next/link";
import HolderChart from "../components/holder-chart";

export default function DAOPage() {
  const {
    query: {
      address,
    },
    isReady,
  } = useRouter();


  const [info, setInfo] = useState<any>(undefined)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (!isReady) return;

    setLoading(true)
    fetch(`/api/dao/info?address=${address}`)
      .then((res) => res.json(
      ))
      .then((data) => {
        setInfo(data)
        console.log(data.holders)
        setLoading(false)
      })
  }, [isReady])

  if (isLoading) return (
    <div className="flex flex-col flex-auto items-center justify-center max-h-72">
      <div className="flex items-center">
        <svg className="mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="ml-2">Loading...</span>
      </div>
    </div>
  )
  if (!info) return <p>No profile data</p>

  return (
    <div className="mt-2 w-full">
      <Link href="/" className="">
        <a
          className=" text-blue-700 text-lg hover:underline"
        >Back</a>
      </Link>
      <div className="flex flex-col gap-2 items-center border rounded-xl mt-2 w-full min-h-screen">

        <div className="flex py-3 bg-gray-200 w-full items-center justify-center gap-6">
          <Image className="rounded-t-lg" src={info?.logo} alt="" height={96} width={96} />
          <p className="text-2xl font-bold">{info?.name}</p>
        </div>
        <div className="flex flex-col gap-3 items-center w-full border-b py-4">
          <a href={info?.homepage} target="_blank">
            <div className="flex items-center gap-1">
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px">    <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z" /></svg>
              <p className=" text-blue-700 hover:underline">{info?.homepage}</p>
            </div>
          </a>
          <a href={info?.twitter?.link} target="_blank">
            <div className="flex items-center gap-1">
              <svg fill="#00ACEE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" /></svg>
              <p className=" text-blue-700 hover:underline">{info?.twitter?.user}</p>
            </div>
          </a>
          <p>fully diluited mkt cap: <span className=" font-medium">${info?.fully_diluted_mkt_cap}</span></p>
          <p>price token: <span className=" font-medium">${info?.price_token}</span></p>
          <p>total holders: <span className=" font-medium">{info?.holders.total}</span></p>

        </div>
          {
            info && (
              <HolderChart
                data={info.holders.top_50}
              />
            )
          }
      </div>
    </div>

  )
}