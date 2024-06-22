import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer pt-16 pb-5 lg:px-[72px]">
      <div className="flex flex-col md:flex-col gap-y-10 md:gap-y-10 lg:flex-row justify-between w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row gap-y-10 md:gap-x-20 lg:gap-x-20">
          <div>
            <h3 className="text-primary text-base font-inter font-semibold">Account</h3>
            <div className="flex flex-col gap-y-2 mt-3">
              <Link href="" className="text-gray font-inter font-normal text-sm">Log in</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Sign up</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Redeem a Gift Card</Link>
            </div>
          </div>
          <div >
            <h3 className="text-primary text-base font-inter font-semibold">Company</h3>
            <div className="flex flex-col gap-y-2 mt-3">
              <Link href="" className="text-gray font-inter font-normal text-sm">About</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Environmental <br /> Initiatives</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Factories</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">DEI</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Careers</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">International</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Accessibility</Link>
            </div>
          </div>
          <div>
            <h3 className="text-primary text-base font-inter font-semibold">Get Help</h3>
            <div className="flex flex-col gap-y-2 mt-3">
              <Link href="" className="text-gray font-inter font-normal text-sm">Help Center</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Return Policy</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Shipping Info</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Bulk Orders</Link>
            </div>
          </div>
          <div>
            <h3 className="text-primary text-base font-inter font-semibold">Connect</h3>
            <div className="flex flex-col gap-y-2 mt-3">
              <Link href="" className="text-gray font-inter font-normal text-sm">facebook</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Instagram</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Twitter</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Affiliates</Link>
              <Link href="" className="text-gray font-inter font-normal text-sm">Out Stores</Link>
            </div>
          </div>
        </div>
        <div className="flex h-fit md:w-full lg:w-[30%]">
            <input type="text" placeholder="Email address" className="px-[18px] py-[13px] font-normal font-inter text-sm w-full border border-primary-ash"/>
            <button className="px-[18px] py-[18px] bg-primary"><img src="/assets/ArrowRight.svg" alt="arrow" /></button>
        </div>
      </div>
      <div className="text-center mt-5">
        <p className="font-normal font-inter text-sm text-gray">© 2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
