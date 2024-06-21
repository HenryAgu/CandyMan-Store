import Footer from "@/app/components/ui/Footer/Footer";
import Navbar from "@/app/components/ui/Navbar/Navbar";
import React from "react";

const page = ({ params }: any) => {
  console.log(params.productId);
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col justify-between gap-y-10 lg:flex-row w-11/12 mx-auto my-20">
        <h1>This is me {params.productId}</h1>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
