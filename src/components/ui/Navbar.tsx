"use client";
import Image from "next/image";
import Link from "next/link";

import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

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

interface NavItem {
  path: string;
  name: string;
}

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-1 lg:flex-row items-center justify-between bg-black text-white h-auto px-8 py-2 w-full">
      <div></div>
      <div>
        <p className="flex flex-col gap-y-1 lg:flex-row items-center text-[10px] lg:text-xs font-semibold font-inter lg:gap-y-0 lg:gap-x-1.5 tracking-wider">
          Get early access on launches and offers.
          <Link
            href=""
            className="flex items-center text-[10px] lg:text-xs font-semibold"
          >
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
      <div className="flex items-center gap-x-1.5 lg:gap-x-3">
        <Image src="/assets/us 1.svg" alt="US-flag" width={25} height={15} />
        <p className="text-[10px] lg:text-xs font-normal tracking-wider">USD</p>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNavbar(true);
  };

  const handleCloseNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <Sheet>
      <section className="w-full font-inter">
        <Header />
        <div className="block lg:hidden">
          <div className="border-b border-[#DDDBDC]">
            <div className="w-[95%] mx-auto my-0">
              <div className="py-3 flex items-center justify-between">
                <div>
                  <button onClick={handleShowNavbar}>
                    <CiMenuFries className="text-[#262626] font-black text-xl" />
                  </button>
                </div>
                <div className="ml-[6vw]">
                  <Link href="/">
                    <h1 className="font-bold font-inter text-sm tracking-wider text-[#262626]">
                      CANDY MAN STORE
                    </h1>
                  </Link>
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
                    <Image
                      src="/assets/User.svg"
                      alt="user"
                      width={16}
                      height={16}
                    />
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
                {showNavbar && (
                  <div className="absolute md:top-[7vh] top-[10vh] bg-white w-[95%] shadow-md">
                    <nav className="h-fit flex flex-col p-3 gap-y-5 text-[#262626]">
                      <button onClick={handleCloseNavbar}>
                        <AiOutlineClose className="text-[#262626] font-black text-xl" />
                      </button>
                      <Link
                        href="/women"
                        className="h-full font-semibold text-sm flex items-center transition ease-in-out delay-150 hover:underline"
                      >
                        Women
                      </Link>
                      <Link
                        href="/men"
                        className="h-full font-semibold text-sm flex items-center transition ease-in-out delay-150 hover:underline"
                      >
                        Men
                      </Link>
                      <Link
                        href="/about"
                        className="h-full font-semibold text-sm flex items-center transition ease-in-out delay-150 hover:underline"
                      >
                        About
                      </Link>
                      <Link
                        href="/everworld-stories"
                        className="h-full font-semibold text-sm flex items-center transition ease-in-out delay-150 hover:underline"
                      >
                        Everworld Stories
                      </Link>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="border-b border-[#DDDBDC]">
            <div className="w-11/12 mx-auto my-0 flex items-center h-[10vh] justify-between">
              <div className="h-[10vh]">
                <nav className="h-full flex items-center gap-x-5 text-[#262626]">
                  <Link
                    href="/women"
                    className="h-full font-normal font-inter text-sm flex items-center border-b-2 transition ease-in-out delay-150 border-transparent hover:border-[#262626]"
                  >
                    Women
                  </Link>
                  <Link
                    href="/men"
                    className="h-full font-normal font-inter text-sm flex items-center border-b-2 transition ease-in-out delay-150 border-transparent hover:border-[#262626]"
                  >
                    Men
                  </Link>
                  <Link
                    href="/about"
                    className="h-full font-normal font-inter text-sm flex items-center border-b-2 transition ease-in-out delay-150 border-transparent hover:border-[#262626]"
                  >
                    About
                  </Link>
                  <Link
                    href="/everworld-stories"
                    className="h-full font-normal font-inter text-sm flex items-center border-b-2 transition ease-in-out delay-150 border-transparent hover:border-[#262626]"
                  >
                    Everworld Stories
                  </Link>
                </nav>
              </div>
              <div className="ml-[-16vw]">
                <Link href="/">
                  <h1 className="font-bold font-inter text-sm tracking-wider text-[#262626]">
                    CANDY MAN STORE
                  </h1>
                </Link>
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
                  <Image
                    src="/assets/User.svg"
                    alt="user"
                    width={16}
                    height={16}
                  />
                </button>
                <SheetTrigger asChild>
                  <button>
                    <Image
                      src="/assets/ShoppingCartSimple.svg"
                      alt="cart"
                      width={16}
                      height={16}
                    />
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <div>cart sheet o</div>
                </SheetContent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Sheet>
  );
};

export default Navbar;
