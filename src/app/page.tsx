import Image from "next/image";
import Navbar from "./components/ui/Navbar/Navbar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}

export const Hero = () => {
  return (
    <div className="bg-[url('/assets/MobileShop.png')] bg-center bg-cover bg-no-repeat lg:bg-[url('/assets/Hero.png')] h-screen w-full">
      <div className="flex flex-col gap-y-3.5 text-white lg:p-40 lg:py-48 pt-60 w-[90%] mx-auto lg:mx-0 lg:w-fit text-center">
        <h3 className="font-normal text-5xl">Your Cozy Era</h3>
        <p className="font-normal text-2xl">
          Get peak comfy-chic <br /> with new winter essentials.
        </p>
        <button className="uppercase w-[80%] mx-auto lg:mx-0 lg:w-full font-normal text-sm text-[#262626] bg-white py-3">shop now</button>
      </div>
    </div>
  );
};
