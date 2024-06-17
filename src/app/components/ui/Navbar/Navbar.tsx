import Image from "next/image";
import Link from "next/link";

import React from "react";

export const Header = () => {
  return (
    <div className="flex items-center justify-between bg-black text-white h-auto px-8 py-2 w-full">
      <div></div>
      <div>
        <p className="flex items-center text-xs font-semibold gap-x-1.5 tracking-wider">
          Get early access on launches and offers.
          <Link href="" className="flex items-center text-xs font-semibold">
            <span className="font-inter font-normal underline">
              Sign Up For Texts
            </span>
            <Image
              src="/assets/ArrowRight.svg"
              alt="arrow"
              width={10}
              height={20}
            />
          </Link>
        </p>
      </div>
      <div className="flex items-center gap-x-3">
        <Image src="/assets/us 1.svg" alt="US-flag" width={25} height={15} />
        <p className="text-xs font-normal tracking-wider">USD</p>
      </div>
    </div>
  );
};

const Navbar = () => {
  const miniNavbar = [
    {
      path: "",
      name: "Holiday Gifting",
    },
    {
      path: "",
      name: "New Arrivals",
    },
    {
      path: "",
      name: "Best-Sellers",
    },
    {
      path: "",
      name: "Clothing",
    },
    {
      path: "",
      name: "Tops & Sweaters",
    },
    {
      path: "",
      name: "Pants & Jeans",
    },
    {
      path: "",
      name: "Outerwear",
    },
    {
      path: "",
      name: "Shoes & Bags",
    },
    {
      path: "",
      name: "Sale",
    },
  ];
  return (
    <section className="w-screen font-inter">
      <Header />
      <div className="border-b border-[#DDDBDC]">
        <div className="w-11/12 mx-auto my-0 flex items-center h-[10vh] justify-between">
          <div className="h-[10vh]">
            <nav className="h-full flex items-center gap-x-5 text-[#262626]">
              <Link
                href=""
                className="h-full font-normal text-sm flex items-center border-b-2 transition ease-in-out delay-150 border-white hover:border-[#262626]"
              >
                Women
              </Link>
              <Link
                href=""
                className="h-full font-normal text-sm flex items-center border-b-2 transition ease-in-out delay-150 border-white hover:border-[#262626]"
              >
                Men
              </Link>
              <Link
                href=""
                className="h-full font-normal text-sm flex items-center border-b-2 transition ease-in-out delay-150 border-white hover:border-[#262626]"
              >
                About
              </Link>
              <Link
                href=""
                className="h-full font-normal text-sm flex items-center border-b-2 transition ease-in-out delay-150 border-white hover:border-[#262626]"
              >
                Everworld Stories
              </Link>
            </nav>
          </div>
          <div className="ml-[-16vw]">
            <h1 className="font-bold font-inter text-sm tracking-wider text-[#262626]">
              CANDY MAN STORE
            </h1>
          </div>
          <div className="flex items-center gap-x-3">
            <button>
              <Image
                src="/assets/MagnifyingGlass.svg"
                alt="search"
                width={16}
                height={16}
              />
            </button>
            <button>
              <Image src="/assets/User.svg" alt="user" width={16} height={16} />
            </button>
            <button>
              <Image
                src="/assets/ShoppingCartSimple.svg"
                alt="cart"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-b border-[#DDDBDC] h-[10vh]">
        <nav className="h-full flex items-center gap-x-5 text-[#262626] ml-[-2vw]">
          {miniNavbar.map((nav, index) => (
            <Link
              href={nav.path}
              key={index}
              className="h-full font-normal text-sm flex items-center border-b-2 transition ease-in-out delay-150 border-white hover:border-[#262626]"
            >
              {nav.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};
export default Navbar;
