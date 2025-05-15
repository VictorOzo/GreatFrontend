import React from "react";
import Image from "next/image";
import payment from "@/assets/images/payment.png";

const NoPayments = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[80vh] ">
        <div className="text-center items-center flex flex-col justify-center">
          <div className="shadow-lg rounded-full  p-4 mb-4">
            <Image
              src={payment}
              alt="payment icon"
              className="w-[30px] h-[30px] "
            />
          </div>
          <h1 className="font-bold w-[130px] mb-[10px]">
            No Payment history available
          </h1>
          <p className="text-gray-500 w-[290px] text-[18px]">
            Once you start making transactions, your payment details will appear
            here.
          </p>
        </div>
      </div>
    </>
  );
};

export default NoPayments;
