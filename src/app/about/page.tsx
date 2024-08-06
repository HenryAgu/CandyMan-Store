import { FC } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

const page: FC = () => {
  return (
    <div className="mx-auto h-full px-0 w-full container">
      <Navbar />
      <div className="bg-[url('/assets/about-hero.png')] bg-center bg-cover bg-no-repeat h-screen w-full">
        <div className="flex flex-col gap-y-5 items-center justify-center h-full text-center">
          <h1 className="font-normal font-inter text-5xl lg:text-7xl text-white">
            We believe <br /> we can all <br /> make <br /> a difference.
          </h1>
          <p className="font-normal font-inter text-xl lg:text-2xl text-white">
            Our way: Exceptional quality. <br /> Ethical factories. Radical
            Transparency.
          </p>
        </div>
      </div>
      <div className="text-center bg-white my-16 w-11/12 md:w-10/12 lg:w-6/12 mx-auto">
        <h1 className="font-inter font-normal text-2xl lg:text-4xl leading-10 text-black">
          At Everlane, we want the right choice to be as easy as putting on a
          great T-shirt. That’s why we partner with the best, ethical factories
          around the world. Source only the finest materials. And share those
          stories with you—down to the true cost of every product we make. It’s
          a new way of doing things. We call it Radical Transparency.
        </h1>
      </div>
      <div className="w-full h-fit flex flex-col md:flex-row lg:flex-row">
        <div className="w-full lg:w-2/4 mx-auto lg:h-auto md:h-[40vh]">
          <Image src="/assets/about.png" alt="image" width={700} height={733} className="w-full aspect-[700/733]" />
        </div>
        <div className="bg-[#e6ded8] w-full lg:w-2/4 mx-auto flex flex-col md:p-8 p-10 lg:p-20 items-start justify-center h-[350px] lg:h-auto md:h-[40vh]">
          <span className="font-normal font-inter text-xs">OUR FACTORIES</span>
          <h1 className="font-normal font-inter text-3xl md:text-3xl lg:text-4xl">
            Our ethical approach.
          </h1>
          <p className="mt-5 font-normal font-inter text-sm">
            We spend months finding the best factories around the world—the same
            ones that produce your favorite designer labels. We visit them often
            and build strong personal relationships with the owners. Each
            factory is given a compliance audit to evaluate factors like fair
            wages, reasonable hours, and environment. Our goal? A score of 90 or
            above for every factory.
          </p>
        </div>
      </div>
      <div className="bg-[url('/assets/about-hero.png')] bg-center bg-cover bg-no-repeat h-[500px] lg:h-screen w-full"></div>
      <div className="w-full h-fit flex flex-col md:flex-row lg:flex-row">
        <div className="bg-[#e6ded8] w-full lg:w-2/4 mx-auto flex flex-col md:p-8 p-10 lg:p-20 items-start justify-center h-[350px] lg:h-auto md:h-[40vh]">
          <span className="font-normal font-inter text-xs">OUR QUALITY</span>
          <h1 className="font-normal font-inter text-3xl md:text-3xl lg:text-4xl">
            Designed <br /> to last.
          </h1>
          <p className="mt-5 font-normal font-inter text-sm">
            At Everlane, we’re not big on trends. We want you to wear our pieces
            for years, even decades, to come. That’s why we source the finest
            materials and factories for our timeless products— like our Grade-A
            cashmere sweaters, Italian shoes, and Peruvian Pima tees.
          </p>
        </div>
        <div className="w-full lg:w-2/4 mx-auto lg:h-auto md:h-[40vh]">
          <Image src="/assets/about2.png" alt="image" width={700} height={552} className="w-full aspect-[700/552]" />
        </div>
      </div>
      <div className="bg-[url('/assets/about3.png')] bg-center bg-cover bg-no-repeat h-[500px] lg:h-screen w-full"></div>
      <div className="w-full h-fit flex flex-col md:flex-row lg:flex-row mb-5 lg:mb-10">
        <div className="w-full lg:w-2/4 mx-auto lg:h-auto md:h-[40vh]">
          <Image src="/assets/prices.png" alt="image" width={700} height={660} className="w-full aspect-[700/660]" />
        </div>
        <div className="bg-white w-full lg:w-2/4 mx-auto flex flex-col md:p-8 p-10 lg:p-20 items-start justify-center h-[350px] lg:h-auto md:h-[40vh]">
          <span className="font-normal font-inter text-xs">OUR PRICES</span>
          <h1 className="font-normal font-inter text-3xl md:text-3xl lg:text-4xl">
            Radically Transparent.
          </h1>
          <p className="mt-5 font-normal font-inter text-sm">
            We believe our customers have a right to know how much their clothes
            cost to make. We reveal the true costs behind all of our
            products—from materials to labor to transportation—then offer them
            to you, minus the traditional retail markup.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto mb-10 lg:mb-20 flex flex-col items-center justify-center">
        <h1 className="font-normal font-inter text-xl lg:text-3xl">
          More to Explore
        </h1>
        <div className="flex items-center justify-center text-center gap-x-5 mt-3 lg:mt-5">
          <div>
            <Image
              src="/assets/Explore1.png"
              alt="image"
              width={320}
              height={195}
            />
            <p className="mt-3 font-semibold font-inter text-sm lg:text-base text-[#4C4C4B]">
              Our Products
            </p>
          </div>
          <div>
            <Image
              src="/assets/Explore1.png"
              alt="image"
              width={320}
              height={195}
            />
            <p className="mt-3 font-semibold font-inter text-sm lg:text-base text-[#4C4C4B]">
              Our Stores
            </p>
          </div>
          <div>
            <Image
              src="/assets/Explore1.png"
              alt="image"
              width={320}
              height={195}
            />
            <p className="mt-3 font-semibold font-inter text-sm lg:text-base text-[#4C4C4B]">
              Career
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
