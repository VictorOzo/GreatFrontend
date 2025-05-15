import BillingHistory from "./components/billing_history/page";


export default function Home() {
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
        <BillingHistory/>
      </div>
    </>
  );
}
