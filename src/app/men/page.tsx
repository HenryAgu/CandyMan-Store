"use client";
import React, { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface size {
  value: string;
}

interface menClothes {
  index: string;
  image: string;
  color: string;
  brand: string;
  price: string;
}

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col justify-between gap-y-10 lg:flex-row w-11/12 mx-auto my-20">
        <SideBar />
        <MainBar />
      </div>
      <Footer/>
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
        <div className="h-px bg-[#DDDBDC] w-full"></div>
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
  const menClothes: menClothes[] = [
    {
      index: crypto.randomUUID(),
      image: "/assets/men-clothes.png",
      color: "Black",
      brand: "The Waffle Long-Sleeve Crew",
      price: "132",
    },
    {
      index: crypto.randomUUID(),
      image: "/assets/men-clothes2.png",
      color: "Black",
      brand: "The Waffle Long-Sleeve Crew",
      price: "132",
    },
    {
      index: crypto.randomUUID(),
      image: "/assets/men-clothes3.png",
      color: "Black",
      brand: "The Waffle Long-Sleeve Crew",
      price: "132",
    },
    {
      index: crypto.randomUUID(),
      image: "/assets/men-clothes4.png",
      color: "Black",
      brand: "The Waffle Long-Sleeve Crew",
      price: "132",
    },
    {
      index: crypto.randomUUID(),
      image: "/assets/men-clothes5.png",
      color: "Black",
      brand: "The Waffle Long-Sleeve Crew",
      price: "132",
    },
    {
      index: crypto.randomUUID(),
      image: "/assets/men-clothes6.png",
      color: "Black",
      brand: "The Waffle Long-Sleeve Crew",
      price: "132",
    },
    {
      index: crypto.randomUUID(),
      image: "/assets/men-clothes7.png",
      color: "Black",
      brand: "The Waffle Long-Sleeve Crew",
      price: "132",
    },
    {
      index: crypto.randomUUID(),
      image: "/assets/men-clothes8.png",
      color: "Black",
      brand: "The Waffle Long-Sleeve Crew",
      price: "132",
    },
    {
      index: crypto.randomUUID(),
      image: "/assets/men-clothes9.png",
      color: "Black",
      brand: "The Waffle Long-Sleeve Crew",
      price: "132",
    },
  ];

  return (
    <div className="basis-4/5 shrink-0 w-full">
      <span className="text-gray font-inter font-normal text-xs">
        Home / Men
      </span>
      <h1 className="text-black font-inter font-normal text-[32px]">
        Men’s Clothing & Apparel
      </h1>
      <p>Featured</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
        {menClothes.map((item) => (
          <Link href={`/men/${item.index}`} key={item.index}>
            <div className="w-full cursor-pointer">
              <img
                src={item.image}
                alt={item.brand}
                className="h-auto w-full"
              />
              <div className="mt-3.5 flex justify-between">
                <div className="flex flex-col gap-y-1.5">
                  <h3 className="text-xs text-primary font-inter font-normal">
                    {item.brand}
                  </h3>
                  <p className="text-xs text-gray font-inter font-normal">
                    {item.color}
                  </p>
                </div>
                <span className="text-xs font-semibold  font-inter text-primary">
                  ${item.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
