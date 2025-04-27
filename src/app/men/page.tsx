"use client";


import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

// Define interfaces for the expected data
interface Size {
  id: string;
  value: string;
}

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
}

interface ProductProps {
  productData: Product[];
  isLoading?: boolean;
  error?: unknown;
}

const MenProductsPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["menData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products/category/men's clothing").then(
        (res) => res.json()
      ),
  });

  return (
    <div className="mx-auto h-full px-0 w-full">
      <Navbar />
      <div className="flex flex-col justify-between gap-y-10 lg:flex-row gap-x-10 mx-auto my-20  container">
        <SideBar productData={data ?? []} />
        <MainBar productData={data ?? []} isLoading={isLoading} error={error} />
      </div>
      <Footer />
    </div>
  );
};

const SideBar: React.FC<ProductProps> = ({ productData }) => {
  const waistSizes: Size[] = [
    { id: crypto.randomUUID(), value: "36" },
    { id: crypto.randomUUID(), value: "36" },
    { id: crypto.randomUUID(), value: "36" },
    { id: crypto.randomUUID(), value: "36" },
    { id: crypto.randomUUID(), value: "36" },
    { id: crypto.randomUUID(), value: "36" },
    { id: crypto.randomUUID(), value: "36" },
    { id: crypto.randomUUID(), value: "36" },
  ];

  const ClothesSizes: Size[] = [
    { id: crypto.randomUUID(), value: "XXS" },
    { id: crypto.randomUUID(), value: "XS" },
    { id: crypto.randomUUID(), value: "S" },
    { id: crypto.randomUUID(), value: "M" },
    { id: crypto.randomUUID(), value: "L" },
    { id: crypto.randomUUID(), value: "XL" },
    { id: crypto.randomUUID(), value: "XXL" },
    { id: crypto.randomUUID(), value: "XXXL" },
  ];

  const [showSize, setShowSize] = useState<boolean>(false);

  const handleShowSize = () => {
    setShowSize(!showSize);
  };

  return (
    <main>
      <aside className="hidden lg:flex flex-col gap-y-5 basis-1/5 shrink-0">
        <span className="font-inter font-normal text-xs text-black">
          {productData.length} Products
        </span>
        <div className="h-px bg-[#DDDBDC] w-full" />
        <div className="flex flex-col gap-y-5">
          <h1 className="font-inter font-semibold text-sm mb-2">Size</h1>
          <div>
            <p className="font-inter font-normal text-xs text-black">Waist</p>
            <div className="mt-2 grid grid-cols-4 gap-1">
              {waistSizes.map((waistSize) => (
                <button
                  type="button"
                  key={waistSize.id}
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
              {ClothesSizes.map((clotheSize) => (
                <button
                  type="button"
                  key={clotheSize.id}
                  className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs"
                >
                  {clotheSize.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <aside className="flex lg:hidden flex-col gap-y-5 basis-1/5 shrink-0">
        <span className="font-inter font-normal text-xs text-black">
          {productData.length} Products
        </span>
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center justify-between">
            <h1 className="font-inter font-semibold text-sm mb-2 text-black">
              Size
            </h1>
            <button type="button" onClick={handleShowSize}>
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
                  {waistSizes.map((waistSize) => (
                    <button
                      type="button"
                      key={waistSize.id}
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
                  {ClothesSizes.map((clotheSize) => (
                    <button
                      type="button"
                      key={clotheSize.id}
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
      </aside>
    </main>
  );
};

const MainBar = ({ productData, isLoading, error }: ProductProps) => {
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
  if (error)
    return <>{`An error has occurred:  + ${(error as Error).message}`}</>;
  const displayedProducts = productData ? productData.slice(0, 27) : [];
  return (
    <div className="basis-4/5 shrink-0 w-full">
      <span className="text-gray font-inter font-normal text-xs">
        Home / Men
      </span>
      <h1 className="text-black font-inter font-normal text-[32px]">
        Men’s Clothing
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((item) => (
            <Link href={`/men/${item.id}`} key={item.id}>
              <div className="w-full cursor-pointer">
                <div className="w-full aspect-[330/392] bg-gray-200">
                  <img
                    src={item.image || "/assets/image.png"}
                    alt={item.title}
                    className="w-full h-full object-cover border border-gray-200"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="mt-3.5 flex justify-between">
                  <div className="flex flex-col gap-y-1.5">
                    <h3 className="text-xs text-primary font-inter font-normal">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray font-inter font-normal">
                      {item.category}
                    </p>
                  </div>
                  <span className="text-xs font-semibold font-inter text-primary">
                    ${item.price}
                  </span>
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

export default MenProductsPage;
