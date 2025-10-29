import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <div className="bg-red-500 text-white p-4 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-full bg-white/20 inline-block rounded-full p-2">
              <ExclamationTriangleIcon className="h-6 w-6 text-white" />
            </div>

            <div>
              <p className="text-sm font-bold">Emergency Assistance</p>
              <p className="text-sm">Call 911 if anyone is injured</p>
            </div>
          </div>

          <button className="bg-white rounded-full text-red-500 px-4 py-1 text-sm font-medium">Call Now</button>
        </div>
      </main>
    </div>
  );
}
