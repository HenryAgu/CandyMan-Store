import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import React from "react";

interface ProductDetailImage {
  id: string;
  image: string;
}

const page = ({ params }: any) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-6 w-11/12 mx-auto lg:my-20">
        <ProductDetailsSidebar params={params} />
        <ProductDetailMainbar />
      </div>
      <Footer />
    </div>
  );
};

const ProductDetailsSidebar = ({ params }: any) => {
  const productDetailImage: ProductDetailImage[] = [
    {
      id: crypto.randomUUID(),
      image: "/assets/productDetail1.png",
    },
    {
      id: crypto.randomUUID(),
      image: "/assets/productDetail2.png",
    },
    {
      id: crypto.randomUUID(),
      image: "/assets/productDetail3.png",
    },
    {
      id: crypto.randomUUID(),
      image: "/assets/productDetail4.png",
    },
    {
      id: crypto.randomUUID(),
      image: "/assets/productDetail5.png",
    },
    {
      id: crypto.randomUUID(),
      image: "/assets/productDetail6.png",
    },
  ];
  return (
    <div className=" basis-[70%] shrink-0">
      <div className="hidden w-full lg:grid grid-cols-2 gap-2">
        {productDetailImage.map((detail) => (
          <div key={detail.id}>
            <Image
              src={detail.image}
              width={412}
              height={508}
              alt="image"
              className="w-full aspect-[412/508]"
            />
          </div>
        ))}
      </div>
      <div className="flex lg:hidden w-full scroll overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-5">
        {productDetailImage.map((detail) => (
          <div
            key={detail.id}
            className="flex flex-col shrink-0 items-center justify-center gap-y-3"
          >
            <Image
              src={detail.image}
              width={234}
              height={330}
              alt="image"
              className="w-full aspect-[234/330]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductDetailMainbar = () => {
  return (
    <div className="flex flex-col gap-y-5 basis-[30%] h-fit shrink-0">
      <div>
        <span className="font-inter font-normal text-xs text-gray">
          Men / Outerwear - Jackets & Coats
        </span>
        <div className="flex justify-between">
          <h1 className="font-inter font-normal text-2xl text-black">
            The ReWool® <br /> Oversized Shirt Jacket
          </h1>
          <h4 className="font-inter font-normal text-2xl text-black">$167</h4>
        </div>
        <div className="flex items-center gap-x-2 mt-2">
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9921 5.36147L8.87804 7.20647L9.51132 9.95334C9.54483 10.0969 9.53527 10.2472 9.48383 10.3854C9.43239 10.5236 9.34135 10.6436 9.2221 10.7303C9.10285 10.8171 8.96068 10.8667 8.81336 10.8731C8.66604 10.8795 8.52011 10.8423 8.39382 10.7662L5.99804 9.31303L3.60741 10.7662C3.48112 10.8423 3.33519 10.8795 3.18787 10.8731C3.04055 10.8667 2.89838 10.8171 2.77913 10.7303C2.65988 10.6436 2.56884 10.5236 2.5174 10.3854C2.46596 10.2472 2.4564 10.0969 2.48991 9.95334L3.12226 7.20928L1.00773 5.36147C0.895886 5.26501 0.815014 5.13768 0.775251 4.99544C0.735489 4.85321 0.738606 4.7024 0.784212 4.56193C0.829818 4.42145 0.915882 4.29757 1.03161 4.20582C1.14734 4.11407 1.28759 4.05852 1.43476 4.04616L4.22194 3.80475L5.30991 1.20975C5.36673 1.07359 5.46256 0.957276 5.58534 0.875465C5.70813 0.793654 5.85237 0.75 5.99991 0.75C6.14745 0.75 6.2917 0.793654 6.41448 0.875465C6.53726 0.957276 6.6331 1.07359 6.68991 1.20975L7.78116 3.80475L10.5674 4.04616C10.7146 4.05852 10.8548 4.11407 10.9706 4.20582C11.0863 4.29757 11.1724 4.42145 11.218 4.56193C11.2636 4.7024 11.2667 4.85321 11.2269 4.99544C11.1872 5.13768 11.1063 5.26501 10.9944 5.36147H10.9921Z"
              fill="#262626"
            />
          </svg>
          <span className="text-neutral-500 font-inter text-xs font-normal">
            5.0 (2 Reviews)
          </span>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-inter font-semibold text-xs text-black">Size</p>
        <div className="flex mt-3 gap-x-3">
          <button className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
            XS
          </button>
          <button className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
            S
          </button>
          <button className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
            M
          </button>
          <button className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
            L
          </button>
          <button className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
            XL
          </button>
          <button className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
            XXL
          </button>
        </div>
        <button className="w-full bg-primary text-white mt-10 py-3 font-inter font-normal text-sm">
          ADD TO BAG
        </button>
      </div>
      <div className="bg-primary-ash h-px mt-3"></div>
      <div>
        <h5 className="font-inter font-semibold text-base">
          Part shirt, part jacket, all style.
        </h5>
        <p className="font-inter font-normal text-black text-sm mt-3">
          Meet your new chilly weather staple. The ReWool® Oversized Shirt
          Jacket has all the classic shirt detailing—collar, cuffs with buttons,
          and a shirttail hem, along with two front chest flap pockets and
          on-seam pockets. The sleeves are fully lined for added warmth and it’s
          made with a GRS-certified recycled Italian Wool and GRS-certified
          recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With
          the goal of increasing the use of recycled materials and reducing the
          harmful impacts of production, the Global Recycled Standard (GRS) sets
          requirements for third-party certification of recycled input in
          products—including chain of custody, social and environmental
          practices, and chemical restrictions.
        </p>
      </div>
      <div className="bg-primary-ash h-px mb-5"></div>
    </div>
  );
};

export default page;
