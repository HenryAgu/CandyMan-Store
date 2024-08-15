import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-candy-gray-100 pt-16 pb-5 lg:px-[72px]">
      <div className="flex flex-col md:flex-col gap-y-10 md:gap-y-10 lg:flex-row justify-between mx-auto  container">
        <div className="flex flex-col md:flex-row lg:flex-row gap-y-10 md:gap-x-20 lg:gap-x-20">
          <div>
            <h3 className="text-primary text-base font-inter font-semibold">
              Account
            </h3>
            <div className="flex flex-col gap-y-2 mt-3">
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Log in
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Sign up
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Redeem a Gift Card
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-primary text-base font-inter font-semibold">
              Company
            </h3>
            <div className="flex flex-col gap-y-2 mt-3">
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                About
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Environmental <br /> Initiatives
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Factories
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                DEI
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Careers
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                International
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Accessibility
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-primary text-base font-inter font-semibold">
              Get Help
            </h3>
            <div className="flex flex-col gap-y-2 mt-3">
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Help Center
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Return Policy
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Shipping Info
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Bulk Orders
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-primary text-base font-inter font-semibold">
              Connect
            </h3>
            <div className="flex flex-col gap-y-2 mt-3">
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                facebook
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Instagram
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Twitter
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Affiliates
              </Link>
              <Link
                href=""
                className="text-gray font-inter font-normal text-sm"
              >
                Out Stores
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-fit md:w-full lg:w-[30%]">
          <input
            type="text"
            placeholder="Email address"
            className="px-[18px] py-[13px] font-normal font-inter text-sm w-full border border-primary-ash"
          />
          <button type="button" className="px-[18px] py-[18px] bg-primary">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            />
              <g clip-path="url(#clip0_376_1628)">
                <path
                  d="M3.75 12.5H20.25"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 5.75L20.25 12.5L13.5 19.25"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_376_1628">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
          </button>
        </div>
      </div>
      <div className="text-center mt-5">
        <p className="font-normal font-inter text-sm text-gray">
          © 2023 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
