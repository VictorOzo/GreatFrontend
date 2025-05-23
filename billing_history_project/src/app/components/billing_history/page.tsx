import React from "react";
import billingHistory from "@/data/billing-history.json";
import "./styles.css";

interface BillingItem {
  created_at: string;
  status: "paid" | "pending" | string;
  amount: number;
  plan: string;
  invoice_url?: string;
  id: string;
}

interface BillingHistory {
  data: BillingItem[];
}

const formatDate = (dateString: string | Date): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function BillingHistory() {
  return (
    <div className="mt-[40px] overflow-x-auto">
      <table className="w-full">
        <thead className="hidden md:table-header-group">
          <tr>
            <th className="text-left pb-4">Invoice</th>
            <th className="text-left pb-4">Status</th>
            <th className="text-left pb-4">Amount</th>
            <th className="text-left pb-4">Plan</th>
            <th className="text-right pb-4"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {billingHistory.data.map((item, index) => (
            <tr key={index} className="block md:table-row py-4">
              <td className="block md:table-cell pb-2">
                <div className="font-medium text-gray-900 md:hidden">
                  Invoice
                </div>
                <div>{formatDate(item.created_at)}</div>
              </td>

              <td className="block md:table-cell pb-2">
                <div className="font-medium text-gray-900 md:hidden">
                  Status
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs capitalize ${
                    item.status === "paid"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-gray-100 text-gray-800 border border-gray-300"
                  }`}>
                  {item.status}
                </span>
              </td>

              <td className="block md:table-cell pb-2">
                <div className="font-medium text-gray-900 md:hidden">
                  Amount
                </div>
                <div>${item.amount}</div>
              </td>

              <td className="block md:table-cell pb-2">
                <div className="font-medium text-gray-900 md:hidden">Plan</div>
                <div>{item.plan}</div>
              </td>

              <td className="block md:table-cell text-right p-auto">
                {item.invoice_url && (
                  <a
                    href={item.invoice_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline text-sm font-medium">
                    Download
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
