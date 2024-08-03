"use client";

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

// Define interfaces for the expected data
interface Size {
  value: string;
}

interface Product {
  id: number;
  images: string[];
  title: string;
  category: { name: string };
  price: number;
}

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-between gap-y-10 lg:flex-row w-11/12 mx-auto my-20">
        <SideBar />
        <MainBar />
      </div>
      <Footer />
    </div>
  );
};

const SideBar: React.FC = () => {
  const waistSizes: Size[] = [
    { value: "36" },
    { value: "36" },
    { value: "36" },
    { value: "36" },
    { value: "36" },
    { value: "36" },
    { value: "36" },
    { value: "36" },
  ];

  const ClothesSizes: Size[] = [
    { value: "XXS" },
    { value: "XS" },
    { value: "S" },
    { value: "M" },
    { value: "L" },
    { value: "XL" },
    { value: "XXL" },
    { value: "XXXL" },
  ];

  const [showSize, setShowSize] = useState<boolean>(false);

  const handleShowSize = () => {
    setShowSize(!showSize);
  };

  return (
    <div>
      <div className="hidden lg:flex flex-col gap-y-5 basis-1/5 shrink-0">
        <span className="font-inter font-normal text-xs text-black">249 Products</span>
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
            <p className="font-inter font-normal text-xs text-black">Clothing</p>
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
        <span className="font-inter font-normal text-xs text-black">249 Products</span>
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <h1 className="font-inter font-semibold text-sm mb-2 text-black">Size</h1>
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
                <p className="font-inter font-normal text-xs text-black">Clothing</p>
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

const MainBar: React.FC = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["menData"],
    queryFn: () =>
      fetch("https://api.escuelajs.co/api/v1/products").then((res) =>
        res.json()
      ),
  });

  if (isLoading)
    return (
      <div className="basis-4/5 shrink-0 w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
          <Skeleton className="w-full h-[500px] aspect-[330/392]" />
          <Skeleton className="w-full h-[500px] aspect-[330/392]" />
          <Skeleton className="w-full h-[500px] aspect-[330/392]" />
        </div>
      </div>
    );

  if (error) return "An error has occurred: " + (error as Error).message;
  const displayedProducts = data ? data.slice(0, 27) : [];

  return (
    <div className="basis-4/5 shrink-0 w-full">
      <span className="text-gray font-inter font-normal text-xs">Home / Men</span>
      <h1 className="text-black font-inter font-normal text-[32px]">Men’s Clothing & Apparel</h1>
      <p>Featured</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((item) => (
            <Link href={`/men/${item.id}`} key={item.id}>
              <div className="w-full cursor-pointer">
                {item.images[0] ? (
                  <img
                    src={item.images[0] || "assets/image.png"}
                    alt={item.title}
                    className="w-full aspect-[330/392]"
                  />
                ) : (
                  <div className="w-full aspect-[330/392] bg-gray-600" />
                )}

                <div className="mt-3.5 flex justify-between">
                  <div className="flex flex-col gap-y-1.5">
                    <h3 className="text-xs text-primary font-inter font-normal">{item.title}</h3>
                    <p className="text-xs text-gray font-inter font-normal">{item.category.name}</p>
                  </div>
                  <span className="text-xs font-semibold font-inter text-primary">${item.price}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Page;
