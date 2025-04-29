"use client";

import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { Toaster, toast } from "sonner";

const CheckoutForm = () => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_API_KEY as string; 
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    amount: 10000, // Amount in kobo (10000 = ₦100)
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // Validate terms checkbox
    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

  };

  const paystackProps = {
    email: formData.email,
    amount: formData.amount,
    publicKey,
    text: "Place Order",
    onSuccess: () => {
      toast.success(`Payment of ₦${formData.amount / 100} was successful!`);
    },
    onClose: () => toast.error("Payment cancelled"),
    metadata: {
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
    },
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
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
            type="tel"
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
        <div className="flex gap-x-1 items-center">
          <input 
            type="checkbox" 
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="text-xl" 
            required
          />
          <span className="text-xs uppercase text-candy-dark-500 font-semibold">
            I have read and agree to the website terms and conditions
            <span className="text-red-500 font-semibold">*</span>
          </span>
        </div>
        
        <PaystackButton
          {...paystackProps}
          className="uppercase mt-5 text-center bg-candy-dark-900 text-white py-3 px-10 w-full lg:w-fit font-inter font-normal text-xs lg:text-sm tracking-[1.4px] leading-[16.8px] disabled:opacity-50"
          disabled={!termsAccepted || !formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber}
        />
      </div>
      <Toaster position="top-right" />
    </form>
  );
};

export default CheckoutForm;