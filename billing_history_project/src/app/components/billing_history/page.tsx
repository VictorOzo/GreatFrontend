import React from "react";
import billingHistory from "@/data/billing-history.json";
import "./styles.css";

const BillingHistory = () => {
  return (
    <div className=" mt-[40px]">
      <table>
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Plan</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {billingHistory.data.map((item, index) => (
            <tr key={index}>
              <td>{item.created_at}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs capitalize ${
                    item.status === "paid"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-gray-100 text-black border border-gray-300"
                  }`}>
                  {item.status}
                </span>
              </td>
              <td>${item.amount}</td>
              <td>{item.plan}</td>

              <td >
                <a
                  href={item.invoice_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:underline ">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingHistory;
