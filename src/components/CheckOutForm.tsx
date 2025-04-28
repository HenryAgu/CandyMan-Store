import { Toaster, toast } from 'sonner';
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const CheckOutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    amount: 1000,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_API_KEY as string;

  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="firstName"
              className="text-xs font-medium text-candy-dark-500 uppercase flex gap-x-0.5"
            >
              <span>First name</span>
              <span className="text-red-500 font-semibold">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              required
              onChange={handleChange}
              className="w-full border border-candy-dark-500 p-2.5 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="lastName"
              className="text-xs font-medium text-candy-dark-500 uppercase flex gap-x-0.5"
            >
              <span>Last name</span>
              <span className="text-red-500 font-semibold">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              required
              onChange={handleChange}
              className="w-full border border-candy-dark-500 p-2.5 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="email"
            className="text-xs font-medium text-candy-dark-500 uppercase flex gap-x-0.5"
          >
            <span>Email</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            required
            onChange={handleChange}
            className="w-full border border-candy-dark-500 p-2.5 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="phoneNumber"
            className="text-xs font-medium text-candy-dark-500 uppercase flex gap-x-0.5"
          >
            <span>Phone number</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full border border-candy-dark-500 p-2.5 rounded-md"
          />
        </div>
      </div>
      <div className="my-10 flex flex-col gap-y-2 w-full">
        <div className="flex gap-x-1">
          <input type="checkbox" name="" id="" className="text-xl" />
          <span className="text-xs uppercase text-candy-dark-500 font-semibold">
            I have read and agree to the website terms and conditions
            <span className="text-red-500 font-semibold">*</span>
          </span>
        </div>
        <PaystackButton
          email={formData.email}
          publicKey={publicKey}
          text="Place order"
          onSuccess={() => toast(`Payment of ${formData.amount} was successful!`)}
          onClose={() => toast("Sure??")}
          amount={formData.amount}
          metadata={{
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            custom_fields: [
              {
                display_name: "First Name",
                variable_name: "first_name",
                value: formData.firstName,
              },
              {
                display_name: "Last Name",
                variable_name: "last_name",
                value: formData.lastName,
              },
              {
                display_name: "Phone Number",
                variable_name: "phone_number",
                value: formData.phoneNumber,
              },
            ],
          }}
          className="uppercase text-center bg-candy-dark-900 text-white py-3 px-10 w-full lg:w-fit font-inter font-normal text-xs lg:text-sm tracking-[1.4px] leading-[16.8px]"
        />
      </div>
      <Toaster/>
    </div>
  );
};

export default CheckOutForm;
