import Image from "next/image";
import Navbar from "./components/ui/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="bg-[url('/assets/MobileShop.png')] bg-center bg-cover bg-no-repeat lg:bg-[url('/assets/Hero.png')] h-screen w-full">
        <div className="flex flex-col gap-y-3.5 text-white lg:p-40 lg:py-48 pt-60 w-[90%] mx-auto lg:mx-0 lg:w-fit text-center">
          <h3 className="font-normal text-5xl">Your Cozy Era</h3>
          <p className="font-normal text-2xl">
            Get peak comfy-chic <br /> with new winter essentials.
          </p>
          <Link href="">
            <button className="uppercase w-[80%] mx-auto lg:mx-0 lg:w-full font-normal text-sm text-[#262626] bg-white py-3">
              shop now
            </button>
          </Link>
        </div>
      </div>
      <Category />
    </main>
  );
}

export function Category() {
  const category = [
    {
      image: "/assets/category1.png",
      name: "Shirts",
    },
    {
      image: "/assets/category2.png",
      name: "denim",
    },
    {
      image: "/assets/category3.png",
      name: "tees",
    },
    {
      image: "/assets/category4.png",
      name: "pants",
    },
    {
      image: "/assets/category5.png",
      name: "sweaters",
    },
    {
      image: "/assets/category6.png",
      name: "outwear",
    },
  ];
  return (
    <div className="w-11/12 mx-auto my-14">
      <h1 className="text-center font-normal text-2xl">Shop by Category</h1>
      <div className="scroll flex overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-5">
        {category.map((categoryItem, index) => (
          <div className="flex flex-col shrink-0 items-center justify-center gap-y-3" key={index}>
            <Image
              src={categoryItem.image}
              alt="shirt"
              width={230}
              height={263}
            />
            <Link href="" className="uppercase underline font-normal text-sm lg:text-sm ">{categoryItem.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
