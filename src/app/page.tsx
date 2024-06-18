import Image from "next/image";
import Navbar from "./components/ui/Navbar/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="bg-[url('/assets/MobileShop.png')] bg-center bg-cover bg-no-repeat lg:bg-[url('/assets/Hero.png')] h-screen w-full">
        <div className="flex flex-col gap-y-3.5 text-white lg:p-40 lg:py-48 pt-60 w-[90%] mx-auto lg:mx-0 lg:w-fit text-center">
          <h3 className="font-normal font-inter text-5xl">Your Cozy Era</h3>
          <p className="font-normal font-inter text-2xl">
            Get peak comfy-chic <br /> with new winter essentials.
          </p>
          <Link href="">
            <button className="uppercase font-inter w-[80%] mx-auto lg:mx-0 lg:w-full font-normal text-sm text-[#262626] bg-white py-3">
              shop now
            </button>
          </Link>
        </div>
      </div>
      <Category />
    </main>
  );
};

const Category = () => {
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
      <h1 className="text-center font-normal font-inter text-2xl">
        Shop by Category
      </h1>
      <div className="scroll flex overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-5">
        {category.map((categoryItem, index) => (
          <div
            className="flex flex-col shrink-0 items-center justify-center gap-y-3"
            key={index}
          >
            <Image
              src={categoryItem.image}
              alt="shirt"
              width={230}
              height={263}
            />
            <Link
              href=""
              className="uppercase underline font-normal font-inter text-sm lg:text-sm "
            >
              {categoryItem.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 gap-y-3 lg:gap-x-3 my-20">
        <div className="bg-[url('/assets/image.png')] bg-center bg-cover bg-no-repeat h-[534px] w-full flex flex-col gap-y-3.5 items-center justify-center group">
          <h3 className="font-inter font-normal text-5xl text-white opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
            New Arrivals
          </h3>
          <Link href="">
            <button className="font-inter uppercase mx-auto lg:mx-auto font-normal text-sm text-[#262626] bg-white py-3 px-10 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              shop the latest
            </button>
          </Link>
        </div>
        <div className="bg-[url('/assets/image.png')] bg-center bg-cover bg-no-repeat h-[534px]  w-full flex flex-col gap-y-3.5 items-center justify-center group">
          <h3 className="font-inter font-normal text-5xl text-white opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
            New Arrivals
          </h3>
          <Link href="">
            <button className="font-inter uppercase mx-auto lg:mx-auto font-normal text-sm text-[#262626] bg-white py-3 px-10 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              shop the latest
            </button>
          </Link>
        </div>
        <div className="bg-[url('/assets/image.png')] bg-center bg-cover bg-no-repeat h-[534px] w-full flex flex-col gap-y-3.5 items-center justify-center group">
          <h3 className="font-inter font-normal text-5xl text-white opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
            New Arrivals
          </h3>
          <Link href="">
            <button className="font-inter uppercase mx-auto lg:mx-auto font-normal text-sm text-[#262626] bg-white py-3 px-10 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              shop the latest
            </button>
          </Link>
        </div>
      </div>
      <div className="grid lg:hidden md:grid-cols-2 md:gap-3 lg:grid-cols-3 gap-y-3 lg:gap-x-3 my-20">
        <div className="bg-[url('/assets/image.png')] bg-center bg-cover bg-no-repeat h-[534px] w-full flex flex-col gap-y-3.5 items-center justify-center">
          <h3 className="font-inter font-normal text-5xl text-white">
            New Arrivals
          </h3>
          <Link href="">
            <button className="font-inter uppercase mx-auto lg:mx-auto font-normal text-sm text-[#262626] bg-white py-3 px-10">
              shop the latest
            </button>
          </Link>
        </div>
        <div className="bg-[url('/assets/image.png')] bg-center bg-cover bg-no-repeat h-[534px]  w-full flex flex-col gap-y-3.5 items-center justify-center">
          <h3 className="font-inter font-normal text-5xl text-white">
            New Arrivals
          </h3>
          <Link href="">
            <button className="font-inter uppercase mx-auto lg:mx-auto font-normal text-sm text-[#262626] bg-white py-3 px-10">
              shop the latest
            </button>
          </Link>
        </div>
        <div className="bg-[url('/assets/image.png')] bg-center bg-cover bg-no-repeat h-[534px] w-full flex flex-col gap-y-3.5 items-center justify-center">
          <h3 className="font-inter font-normal text-5xl text-white">
            New Arrivals
          </h3>
          <Link href="">
            <button className="font-inter uppercase mx-auto lg:mx-auto font-normal text-sm text-[#262626] bg-white py-3 px-10">
              shop the latest
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[#262626] flex flex-col justify-center items-center text-center gap-y-2 py-28 px-10 lg:px-0">
        <h2 className="text-white text-2xl lg:text-3xl font-normal font-inter">
          We’re on a Mission To Clean Up the Industry
        </h2>
        <p className="text-white text-sm lg:text-base font-normal font-inter">
          Read about our progress in our latest Impact Report.
        </p>
        <Link href="">
          <button className="font-inter uppercase mx-auto mt-5 font-normal text-sm text-[#262626] bg-white py-2 px-10">
            learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
