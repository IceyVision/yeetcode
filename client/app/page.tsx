import Image from "next/image";

export default function Home() {
  return (
    <main className="dark:bg-gradient-to-b from-black via-slate-800 to-black">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center flex flex-row">
          <h1 className="text-black dark:text-white text-4xl font-medium text-center pr-2 align-middle">Welcome to </h1>
          <div className="underline decoration-blue-500">
            <h1 className="text-4xl font-medium text-center underline text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Yeetcode</h1>
          </div>
        </div>
        <div className="mt-4 max-w-xl">
          <h1 className="text-black dark:text-white text-xl text-center">Leverage your <span className="underline">coding skills</span> by completing challenges created by the <span className="underline">community</span>.</h1>
        </div>
      </div>
      
      
    </main>
  );
}
