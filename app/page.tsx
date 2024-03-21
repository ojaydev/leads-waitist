import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#C9F9D1] relative overflow-hidden">
          <Image
            src="/photo_2024-01-28_10-14-35.jpg"
            alt="Luminar Leads eBook"
            fill
            className="object-contain mt-8 md:mt-24 px-14 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Get a free eBook to maximum results on your leads generation strategy!
          </h1>
          <p className="text-gray-500">
             Get curated tips/strategies for leads generation and how to improve your current process!
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
