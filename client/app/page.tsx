import Image from "next/image";
import { Button } from "@/components/ui/button"
import { DoubleArrowRightIcon } from "@radix-ui/react-icons"
import { oswald } from "@/lib/fonts"
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link"

export default function Home() {
  return (
    <main className="dark:bg-gradient-to-b from-black via-slate-800 to-black">
      <div className="">
        <h1 className={`${oswald.className} text-4xl p-3 pl-5 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-gray-800 hover:text-white transition ease-in-out duration-300`}>Yeetcode</h1>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center flex flex-row">
          <h1 className="text-black dark:text-white text-4xl font-medium text-center pr-2 align-middle">Welcome to </h1>
          <div className="underline decoration-blue-500">
            <h1 className="text-4xl font-medium text-center underline text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Yeetcode</h1>
            <Meteors number={20} />
          </div>
        </div>
        <div className="mt-4 max-w-xl">
          <h1 className="text-black dark:text-white text-xl text-center">Leverage your <span className="underline">coding skills</span> by completing challenges created by the <span className="underline">community</span>.</h1>
        </div>
        <div className="mt-5">
          <Button variant="outline" asChild><Link href="/challenges"><DoubleArrowRightIcon className="mr-2"/>Get started</Link></Button>
        </div>
        
      </div>
    </main>
  );
}
