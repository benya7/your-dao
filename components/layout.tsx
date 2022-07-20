import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>YourDAO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <nav className="flex gap-2 justify-around items-center border-b h-16 w-full">
      <p>asd</p>
        <p>asd</p>

    </nav>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>

      <footer className="flex h-16 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}