"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

interface rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: rating;
}

interface ProductProps {
  productData?: Product;
  productId?: string,
  isLoading?: boolean;
  error?: unknown;
}

const MenProductPage = ({ params }: any) => {
  const productId = params.productId;
  const { data, isLoading, error } = useQuery<Product>({
    queryKey: ["singeMenData"],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${productId}`).then((res) =>
        res.json()
      ),
  });
  return (
    <div className="mx-auto h-full px-0 w-full">
      <Navbar />
      <div className="flex flex-col-reverse gap-y-2 lg:flex-row lg:gap-x-6 w-11/12 mx-auto lg:my-20  container">
        <ProductDetailsSidebar
          productData={data}
          isLoading={isLoading}
          error={error}
        />
        <ProductDetailMainbar
          productData={data}
          isLoading={isLoading}
          error={error}
          productId={productId}
        />
      </div>
      <Footer />
    </div>
  );
};

const ProductDetailsSidebar = ({
  productData,
  isLoading,
  error,
}: ProductProps) => {
  if (isLoading)
    return (
      <div className=" basis-[70%] shrink-0">
        <Skeleton className="w-11/12 h-screen lg:grid grid-cols-1 gap-2" />
      </div>
    );
  if (error)
    return <div>An error has occurred: {(error as Error).message}</div>;
  if (!productData) return <div>No product data found</div>;
  return (
    <div className=" basis-[70%] shrink-0">
      <div className="w-full lg:w-11/12 lg:grid grid-cols-1 gap-2">
        <div className="w-full aspect-[280/220] bg-gray-200">
          <img
            src={productData.image || "/assets/image.png"}
            alt={productData.title}
            className="w-full aspect-[280/320] object-cover border border-gray-200"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
};

interface ProductRating {
  rate: number;
  count: number;
}

const ProductDetailMainbar = ({
  productData,
  isLoading,
  error,
  productId,
}: ProductProps) => {
  // Fetch product data based on productId
  const { data, isLoading: isProductLoading, error: fetchError } = useQuery<Product>({
    queryKey: ['singleProductData', productId],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => {
        if (!res.ok) throw new Error('Failed to fetch product data');
        return res.json();
      }),
    enabled: !!productId, // Ensure query runs only if productId is defined
  });

  if (isLoading || isProductLoading) {
    return (
      <div className="basis-[30%]">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }
  if (error || fetchError) {
    return <div>An error has occurred: {(error as Error).message}</div>;
  }
  if (!data) return <div>No product data found</div>;

  // Add to cart function
  const handleAddToCart = () => {
    // Implement cart addition logic here
    console.log(`Added to cart: ${data.title}`);
  };

  return (
    <div className="flex flex-col gap-y-5 basis-[30%] h-fit shrink-0 mt-5 lg:mt-0">
      <div>
        <span className="font-inter font-normal text-xs text-gray">
          <Link href="/men">Men</Link> / {data.category}
        </span>
        <div className="flex gap-x-4 justify-between">
          <h1 className="font-inter font-normal text-2xl text-black max-w-[260px]">
            {data.title}
          </h1>
          <h4 className="font-inter font-normal text-2xl text-black">
            ${data.price}
          </h4>
        </div>
        <div className="flex items-center gap-x-2 mt-2">
          {/* SVG for rating can go here */}
          <span className="text-neutral-500 font-inter text-xs font-normal">
            {`${data.rating.rate} (${data.rating.count} Reviews)`}
          </span>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-inter font-semibold text-xs text-black">Size</p>
        <div className="flex mt-3 gap-x-3">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <button
              key={size}
              className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs"
            >
              {size}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="w-full bg-primary text-white mt-10 py-3 font-inter font-normal text-sm"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
      <div className="bg-primary-ash h-px mt-3" />
      <div>
        <h5 className="font-inter font-semibold text-base">About Product</h5>
        <p className="font-inter font-normal text-black text-sm mt-3">
          {data.description}
        </p>
      </div>
      <div className="bg-primary-ash h-px mb-5" />
    </div>
  );
};

export default MenProductPage;
