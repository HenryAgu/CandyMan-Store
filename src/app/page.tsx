import Image from "next/image";

import Link from "next/link";
import { FC } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface CategoryItem {
  image: string;
  name: string;
}

interface FavouriteItem {
  image: string;
  name: string;
  brand: string;
  price: string;
}

const Home: FC = () => {
  return (
    <div className="mx-auto h-full px-0 w-full container">
      <main className="">
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
        <Favourite />
        <Testimonial />
        <div className="bg-[#262626] h-[1px] w-11/12 mx-auto my-10"></div>
        <Fashion />
        <Footer />
      </main>
    </div>
  );
};

const Category: FC = () => {
  const category: CategoryItem[] = [
    {
      image: "/assets/category1.png",
      name: "Shirts",
    },
    {
      image: "/assets/category3.png",
      name: "tees",
    },
    {
      image: "/assets/category5.png",
      name: "sweaters",
    },

    {
      image: "/assets/category6.png",
      name: "outwear",
    },
    {
      image: "/assets/category2.png",
      name: "denim",
    },

    {
      image: "/assets/category4.png",
      name: "pants",
    },
  ];

  return (
    <div className="w-full lg:w-11/12 mx-auto my-10 lg:my-14">
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
              alt={categoryItem.name}
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
      <div className="hidden lg:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 gap-y-3 lg:gap-x-3 my-10 lg:my-20">
        <div className="bg-[url('/assets/image.png')] bg-center bg-cover bg-no-repeat h-[534px] w-full flex flex-col gap-y-3.5 items-center justify-center group hover:grayscale">
          <h3 className="font-inter font-normal text-5xl text-white opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
            New Arrivals
          </h3>
          <Link href="">
            <button className="font-inter uppercase mx-auto lg:mx-auto font-normal text-sm text-[#262626] bg-white py-3 px-10 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              shop the latest
            </button>
          </Link>
        </div>
        <div className="bg-[url('/assets/image.png')] bg-center bg-cover bg-no-repeat h-[534px]  w-full flex flex-col gap-y-3.5 items-center justify-center group hover:grayscale">
          <h3 className="font-inter font-normal text-5xl text-white opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
            New Arrivals
          </h3>
          <Link href="">
            <button className="font-inter uppercase mx-auto lg:mx-auto font-normal text-sm text-[#262626] bg-white py-3 px-10 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              shop the latest
            </button>
          </Link>
        </div>
        <div className="bg-[url('/assets/image.png')] bg-center bg-cover bg-no-repeat h-[534px] w-full flex flex-col gap-y-3.5 items-center justify-center group hover:grayscale">
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
      <div className="grid lg:hidden md:grid-cols-2 md:gap-3 lg:grid-cols-3 gap-y-3 lg:gap-x-3 my-10 lg:my-20">
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

const Favourite: FC = () => {
  const favouriteItems: FavouriteItem[] = [
    {
      image: "/assets/image-1.png",
      name: "The Waffle Long-Sleeve Crew",
      brand: "Bone",
      price: "90",
    },
    {
      image: "/assets/image-2.png",
      name: "The Bomber Jacket | Uniform",
      brand: "Toasted Coconut",
      price: "148",
    },
    {
      image: "/assets/image-3.png",
      name: "The Slim 4-Way Stretch Organic Jean | Uniform",
      brand: "Bone",
      price: "98",
    },
    {
      image: "/assets/image-1.png",
      name: "The Essential Organic Crew",
      brand: "Vintage Black",
      price: "30",
    },
    {
      image: "/assets/image-2.png",
      name: "The Heavyweight",
      brand: "Heathered Brown",
      price: "90",
    },
    {
      image: "/assets/image-3.png",
      name: "The Waffle Long-Sleeve Crew",
      brand: "Bone",
      price: "90",
    },
  ];

  return (
    <div className="w-full w-full lg:w-11/12 mx-auto my-10 lg:my-32">
      <div className="text-center">
        <h1 className="font-inter text-xl lg:text-2xl font-normal lg:mb-2 text-black">
          Everlane Favorites
        </h1>
        <p className="font-inter font-normal text-sm lg:text-base text-black">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </p>
      </div>
      <div className="scroll flex overflow-x-scroll snap-mandatory snap-x no-scrollbar gap-x-2 mt-4 lg:mt-8">
        {favouriteItems.map((item, index) => (
          <div
            className="flex flex-col shrink-0 items-center justify-center gap-y-3"
            key={index}
          >
            <Image src={item.image} alt={item.name} width={282} height={420} />
            <div className="w-full flex justify-between">
              <div className="flex flex-col gap-y-1">
                <p className="text-xs font-normal font-inter text-[#262626]">
                  {item.name}
                </p>
                <span className="text-xs font-normal font-inter text-[#737373]">
                  {item.brand}
                </span>
              </div>
              <div>
                <p className="text-xs font-normal font-inter text-[#262626]">
                  ${item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonial: FC = () => {
  return (
    <div className="md:w-11/12 lg:w-[78%] mx-auto mb-24 flex flex-col lg:flex-row items-center justify-between gap-y-5 lg:gap-y-0 lg:gap-x-10">
      <div className="flex flex-col items-center lg:items-start lg:w-full">
        <span className="font-normal font-inter text-base">
          People Are Talking
        </span>
        <img src="/assets/star.svg" alt="stars" className=" mt-5" />
        <h4 className="font-normal font-inter text-2xl mt-3 text-center lg:text-left">
          “Love this shirt! Fits perfectly and <br /> the fabric is thick
          without <br /> being stiff.”
        </h4>
        <p className="font-normal text-sm font-inter mt-5">
          -- JonSnSF, The Heavyweight Overshirt
        </p>
      </div>
      <div className="w-11/12 flex items-center justify-center lg:w-full">
        <Image
          src="/assets/testimonial.png"
          alt="testimonial"
          width={530}
          height={695}
        />
      </div>
    </div>
  );
};

const Fashion: FC = () => {
  return (
    <div>
      <div className="w-11/12 lg:w-[70%] mx-auto lg:my-10 lg:mb-20 flex flex-col lg:flex-row items-center gap-y-5 lg:gap-y-0 lg:gap-x-5">
        <div>
          <p className="text-center font-inter font-normal text-2xl mb-5">
            Our Holiday Gift Picks
          </p>
          <Image
            src="/assets/Gift.png"
            alt=""
            width={505}
            height={626}
            className="transition-grayscale duration-500 hover:grayscale"
          />
          <div className="flex flex-col justify-center items-center gap-y-2 mt-3">
            <span className="font-normal font-inter text-center text-[#262626] text-sm">
              The best presents for everyone on your list.
            </span>
            <Link href="" className="underline text-sm font-inter font-normal">
              Read More
            </Link>
          </div>
        </div>
        <div>
          <p className="text-center font-inter font-normal text-2xl mb-5">
            Cleaner Fashion
          </p>
          <Image
            src="/assets/Fashion.png"
            alt=""
            width={505}
            height={626}
            className="transition-grayscale duration-500 hover:grayscale"
          />
          <div className="flex flex-col justify-center items-center gap-y-2 mt-3">
            <span className="font-normal font-inter text-center text-[#262626] text-sm">
              See the sustainability efforts behind each of our products.
            </span>
            <Link href="" className="underline text-sm font-inter font-normal">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto my-10 lg:my-20 flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-x-20">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/assets/everlane.png"
            alt="everlane"
            width={78}
            height={78}
            className="mb-5"
          />
          <p className="font-inter font-semibold text-sm">
            Complimentary Shipping
          </p>
          <span className="font-normal font-inter text-sm mt-1">
            Enjoy free shipping on U.S. orders over $100.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/assets/everlane2.png"
            alt="everlane"
            width={78}
            height={78}
            className="mb-5"
          />
          <p className="font-inter font-semibold text-sm">
            Consciously Crafted
          </p>
          <span className="font-normal font-inter text-sm mt-1">
            Designed with you and the planet in mind.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/assets/everlane3.png"
            alt="everlane"
            width={78}
            height={78}
            className="mb-5"
          />
          <p className="font-inter font-semibold text-sm">Come Say Hi</p>
          <span className="font-normal font-inter text-sm mt-1">
            We have 11 stores across the U.S.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
