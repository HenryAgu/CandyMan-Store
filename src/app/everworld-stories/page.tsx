import React, { FC } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

interface theLatestInterface {
  image: string;
  title: string;
  keyword: string;
}

interface progressInterface {
  image: string;
  title: string;
}

const page: FC = () => {
  const theLatest: theLatestInterface[] = [
    {
      image: "/assets/latest1.png",
      title: "How To Style Winter Whites",
      keyword: "Style",
    },
    {
      image: "/assets/latest2.png",
      title: "We Won A Glossy Award",
      keyword: "Transparency",
    },
    {
      image: "/assets/latest3.png",
      title: "Coordinate Your Style: Matching Outfits for Everyone",
      keyword: "Style",
    },
    {
      image: "/assets/latest4.png",
      title: "Black Friday Fund 2023",
      keyword: "Transparency",
    },
    {
      image: "/assets/latest5.png",
      title: "What to Wear this Season: Holiday Outfits & Ideas",
      keyword: "Style",
    },
    {
      image: "/assets/latest6.png",
      title: "Thanksgiving Outfit Ideas",
      keyword: "Style",
    },
  ];

  const theProgress: progressInterface[] = [
    {
      image: "/assets/progress1.png",
      title: "Carbon Commitment",
    },
    {
      image: "/assets/progress2.png",
      title: "Environmental Initiatives",
    },
    {
      image: "/assets/progress3.png",
      title: "Better Factories",
    },
  ];
  return (
    <div className="mx-auto h-full px-0 w-full container">
      <Navbar />
      <div className="w-11/12 mx-auto my-16">
        <div className="bg-primary w-full h-2 lg:h-3.5"></div>
        <h1 className="font-inter font-semibold text-primary text-6xl lg:text-[160px] leading-[80px] lg:leading-[176px]">
          everworld
        </h1>
        <div className="mb-5 mt-1 lg:mt-5 lg:mb-10">
          <p className="hidden lg:block font-inter font-normal text-2xl leading-8">
            We’re on a mission to clean up a dirty industry. <br />
            These are the people, stories, and ideas that will help us get
            there.
          </p>
          <p className="block lg:hidden font-inter font-normal text-sm">
            We’re on a mission to clean up a dirty industry. <br />
            These are the people, stories, and <br /> ideas that will help us
            get there.
          </p>
        </div>
        <div className="my-32 mt-24 lg:mt-48 w-full mx-auto">
          <h1 className="font-inter font-semibold text-5xl text-center lg:text-left">
            The Latest
          </h1>
          <div className="grid lg:grid-cols-3 justify-center lg:justify-between gap-x-5 gap-y-10 lg:gap-y-20 mt-5">
            {theLatest.map((latestItem, index) => (
              <div key={index}>
                <Image
                  src={latestItem.image}
                  width={411}
                  height={413}
                  alt="image"
                  className="w-full grayscale transition-grayscale duration-300 hover:grayscale-0 aspect-[411/413]"
                />
                <div className="mt-5 flex flex-col gap-y-2">
                  <h3 className="font-inter font-normal text-3xl text-black">
                    {latestItem.title}
                  </h3>
                  <span className="px-5 py-1 border border-primary-ash w-fit rounded-full font-inter font-semibold text-xs">
                    {latestItem.keyword}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-32 mt-24 lg:mt-48 w-full mx-auto">
          <h1 className="font-inter font-semibold text-5xl text-center lg:text-left">
            The Progress
          </h1>
          <div className="grid lg:grid-cols-3 justify-center lg:justify-between gap-x-5 gap-y-10 lg:gap-y-20 mt-5">
            {theProgress.map((progressItem, index) => (
              <div key={index}>
                <Image
                  src={progressItem.image}
                  alt="image"
                  width={411}
                  height={413}
                  className="w-full grayscale transition-grayscale duration-300 hover:grayscale-0 aspect-[411/413]"
                />
                <div className="mt-3 flex flex-col gap-y-2">
                  <h3 className="font-inter font-normal text-3xl text-black">
                    {progressItem.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="py-[90px] w-11/12 mx-auto flex flex-col gap-y-2 lg:gap-y-5">
          <h1 className="font-inter font-semibold text-3xl lg:text-[54px] text-white">
            Follow us on social for more
          </h1>
          <button className="bg-white text-black w-fit text-xs px-5 py-3 lg:text-sm font-inter font-semibold lg:py-5 lg:px-12 rounded-lg">
            @Everlane Instagram
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
