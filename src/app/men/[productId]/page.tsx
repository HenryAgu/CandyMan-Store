import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
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
            <img src={detail.image} alt="image" className="h-auto w-full" />
          </div>
        ))}
      </div>
      <div className="flex lg:hidden w-full scroll overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-5">
        {productDetailImage.map((detail) => (
          <div key={detail.id} className="flex flex-col shrink-0 items-center justify-center gap-y-3">
            <img src={detail.image} alt="image" className="h-auto w-[234px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductDetailMainbar = () => {
  return (
    <div className="bg-red-400 basis-[30%] shrink-0">
      <h1>Product Details Mainbar</h1>
    </div>
  );
};

export default page;
