import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
            <img src={detail.image} alt="image" className="h-auto w-full" />
          </div>
        ))}
      </div>
      <div className="flex lg:hidden w-full scroll overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-5">
        {productDetailImage.map((detail) => (
          <div
            key={detail.id}
            className="flex flex-col shrink-0 items-center justify-center gap-y-3"
          >
            <img src={detail.image} alt="image" className="h-auto w-[234px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductDetailMainbar = () => {
  return (
    <Sheet>
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
          <SheetTrigger asChild>
            <button className="w-full bg-primary text-white mt-10 py-3 font-inter font-normal text-sm">
              ADD TO BAG
            </button>
          </SheetTrigger>
          <SheetContent>
            <div>fuck sheet o</div>
          </SheetContent>
        </div>
        <div className="bg-primary-ash h-px mt-3"></div>
        <div>
          <h5 className="font-inter font-semibold text-base">
            Part shirt, part jacket, all style.
          </h5>
          <p className="font-inter font-normal text-black text-sm mt-3">
            Meet your new chilly weather staple. The ReWool® Oversized Shirt
            Jacket has all the classic shirt detailing—collar, cuffs with
            buttons, and a shirttail hem, along with two front chest flap
            pockets and on-seam pockets. The sleeves are fully lined for added
            warmth and it’s made with a GRS-certified recycled Italian Wool and
            GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so
            easy to layer. With the goal of increasing the use of recycled
            materials and reducing the harmful impacts of production, the Global
            Recycled Standard (GRS) sets requirements for third-party
            certification of recycled input in products—including chain of
            custody, social and environmental practices, and chemical
            restrictions.
          </p>
        </div>
        <div className="bg-primary-ash h-px mb-5"></div>
      </div>
    </Sheet>
  );
};

export default page;
