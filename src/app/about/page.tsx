import { FC } from "react";
import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "../components/ui/Footer/Footer";
import Image from "next/image";

const page: FC = () => {
  return (
    <div className="overflow-x-hidden">
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
          <img src="/assets/about.png" alt="image" className="w-full h-full" />
        </div>
        <div className="bg-[#e6ded8] w-full lg:w-2/4 mx-auto flex flex-col md:p-8 p-10 lg:p-20 items-start justify-center h-[350px] lg:h-auto md:h-[40vh]">
          <span className="font-normal font-inter text-xs">OUR FACTORIES</span>
          <h1 className="font-normal font-inter text-3xl md:text-3xl lg:text-4xl">Our ethical approach.</h1>
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
      <Footer />
    </div>
  );
};

export default page;
