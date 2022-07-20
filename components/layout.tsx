import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import Search from "./search";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>YourDAO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <nav className="flex gap-2 justify-between items-center px-8 border-b h-20 w-full">
      <p className="text-2xl font-bold">YourDAO</p>
      <Search />
    </nav>
      <main className="flex flex-col items-center w-full min-h-screen px-8 py-4">
        {children}
      </main>

      <footer className="flex h-16 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://www.covalenthq.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/covalent-logo.png" alt="Covalent Logo" width={144} height={72} />
        </a>
      </footer>
    </div>
  )
}