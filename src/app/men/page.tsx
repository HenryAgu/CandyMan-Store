"use client";
import React, { useState } from "react";
import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "../components/ui/Footer/Footer";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface size {
  value: string;
}

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-5 w-11/12 mx-auto my-20">
        <SideBar />
        <MainBar />
      </div>
      <Footer />
    </div>
  );
};

const SideBar = () => {
  const waistSizes: size[] = [
    {
      value: "36",
    },
    {
      value: "36",
    },
    {
      value: "36",
    },
    {
      value: "36",
    },
    {
      value: "36",
    },
    {
      value: "36",
    },
    {
      value: "36",
    },
    {
      value: "36",
    },
  ];

  const ClothesSizes: size[] = [
    {
      value: "XXS",
    },
    {
      value: "XS",
    },
    {
      value: "S",
    },
    {
      value: "M",
    },
    {
      value: "L",
    },
    {
      value: "XL",
    },
    {
      value: "XXL",
    },
    {
      value: "XXXL",
    },
  ];
  const [showSize, setShowSize] = useState<boolean>(false);

  const handleShowSize = () => {
    setShowSize(!showSize);
  };
  return (
    <div>
      <div className="hidden lg:flex flex-col gap-y-5 basis-1/5 shrink-0">
        <span className="font-inter font-normal text-xs text-black">
          249 Products
        </span>
        <div className="flex flex-col gap-y-5">
          <h1 className="font-inter font-semibold text-sm mb-2">Size</h1>
          <div>
            <p className="font-inter font-normal text-xs text-black">Waist</p>
            <div className="mt-2 grid grid-cols-4 gap-1">
              {waistSizes.map((waistSize, index) => (
                <button
                  key={index}
                  className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs"
                >
                  {waistSize.value}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-inter font-normal text-xs text-black">
              Clothing
            </p>
            <div className="mt-2 grid grid-cols-4 gap-1">
              {ClothesSizes.map((clotheSize, index) => (
                <button
                  key={index}
                  className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs"
                >
                  {clotheSize.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-y-5 basis-1/5 shrink-0">
        <span className="font-inter font-normal text-xs text-black">
          249 Products
        </span>
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <h1 className="font-inter font-semibold text-sm mb-2 text-black">
              Size
            </h1>
            <button onClick={handleShowSize}>
              {showSize ? (
                <IoIosArrowDown className="font-inter font-semibold text-sm mb-2 text-black" />
              ) : (
                <IoIosArrowUp className="font-inter font-semibold text-sm mb-2 text-black" />
              )}
            </button>
          </div>
          {showSize && (
            <div className="flex flex-col gap-y-10">
              <div>
                <p className="font-inter font-normal text-xs text-black">
                  Waist
                </p>
                <div className="mt-2 grid grid-cols-4 gap-1">
                  {waistSizes.map((waistSize, index) => (
                    <button
                      key={index}
                      className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs"
                    >
                      {waistSize.value}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-inter font-normal text-xs text-black">
                  Clothing
                </p>
                <div className="mt-2 grid grid-cols-4 gap-1">
                  {ClothesSizes.map((clotheSize, index) => (
                    <button
                      key={index}
                      className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs"
                    >
                      {clotheSize.value}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MainBar = () => {
  return (
    <div className="basis-4/5 shrink-0 bg-red-700">
      <h1>Main Bar</h1>
    </div>
  );
};

export default page;
