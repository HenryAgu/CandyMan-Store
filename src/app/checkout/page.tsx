"use client";

import { useRouter } from "next/navigation";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";
import CheckOutForm from "@/components/CheckOutForm";
import Order from "@/components/Order";

const CheckOutPage = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <main className="lg:py-20 lg:px-14 p-5 mx-auto container w-full min-h-screen">
        <header className="flex flex-col gap-y-5">
          <h1 className="font-semibold text-xs text-black">CART</h1>
          <p className="text-xs uppercase text-black font-normal">
            Not done shopping?{" "}
            <span
              onClick={() => router.back()}
              className="font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:underline"
            >
              Go back
            </span>
          </p>
        </header>

        <div className="flex lg:flex-row flex-col gap-10 mt-10">
          <div className="basis-[55%]">
            <h2 className="text-xs uppercase text-black font-semibold">
              Billing details
            </h2>
            <CheckOutForm/>
          </div>
          <aside className="basis-[45%]">
            <h2 className="text-xs uppercase text-black font-semibold">
              Your order
            </h2>
            <Order/>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckOutPage;
