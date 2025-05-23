"use client";

import BillingHistory from "./components/billing_history/page";
import NoPayments from "./components/no_payment/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const timer2 = setTimeout(() => {
      setShowHistory(true);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <div className="paymentHistorySection px-[90px] py-[45px]">
        <div className="header">
          <h1 className="text-bold font-medium">Payment History</h1>
          <p className="text-sm text-neutral-400">
            Please reach out to our friendly team via team@codeplus.com if you
            have any questions
          </p>
        </div>
        {isLoading ? (
          <NoPayments />
        ) : showHistory ? (
          <BillingHistory />
        ) : (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
          </div>
        )}
      </div>
    </>
  );
}
