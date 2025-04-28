import React from "react";

const CheckOutForm = () => {
  return (
    <form className="mt-5">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="first-name"
              aria-labelledby="first name"
              className="text-xs font-medium text-black uppercase flex gap-x-0.5"
            >
              <span>First name</span>
              <span className="text-red-500 font-semibold">*</span>
            </label>
            <input
              type="text"
              name="first-name"
              id=""
              className="w-full border border-black p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="last-name"
              aria-labelledby="last name"
              className="text-xs font-medium text-black uppercase flex gap-x-0.5"
            >
              <span>Last name</span>
              <span className="text-red-500 font-semibold">*</span>
            </label>
            <input
              type="text"
              name="last-name"
              id=""
              className="w-full border border-black p-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor=""
            aria-labelledby="first name"
            className="text-xs font-medium text-black uppercase flex gap-x-0.5"
          >
            <span>Email</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            type="email"
            name=""
            id=""
            className="w-full border border-black p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor=""
            aria-labelledby="first name"
            className="text-xs font-medium text-black uppercase flex gap-x-0.5"
          >
            <span>phone number</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full border border-black p-2 rounded-md"
          />
        </div>
      </div>
    </form>
  );
};

export default CheckOutForm;
