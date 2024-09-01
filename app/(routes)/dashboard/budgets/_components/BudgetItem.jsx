import Link from "next/link";
import React from "react";

function BudgetItem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return Math.min(perc, 100).toFixed(2);
  };
  const isExceeded = budget.totalSpend > budget.amount;

  return (
    <Link href={"/dashboard/expenses/" + budget?.id}>
      <div className="p-5 border rounded-lg hover:shadow-md duration-200 cursor-pointer">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <h2 className="text-3xl p-3 bg-slate-100 rounded-full px-4 py-4">
              {budget?.icon}
            </h2>
            <div>
              <h2 className="font-bold">{budget?.name}</h2>
              <h2 className="text-sm text-gray-500">
                {budget?.totalItem} Item
              </h2>
            </div>
          </div>
          <h2 className="font-bold text-primary text-lg">${budget?.amount}</h2>
        </div>

        <div className="mt-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xs text-slate-400">
              ${budget?.totalSpend ? budget?.totalSpend : 0} Spent
            </h2>

            <h2 className="text-xs text-slate-400">
              $
              {isExceeded
                ? budget?.totalSpend - budget?.amount
                : budget?.amount - budget?.totalSpend}
              {isExceeded ? " Exceeded" : " Remaining"}
            </h2>
          </div>
          <div className="w-full bg-slate-300 h-2 rounded-full">
            <div
              style={{
                width: `${calculateProgressPerc()}%`,
              }}
              className={`${
                isExceeded ? "bg-red-500" : "bg-primary"
              } h-2 rounded-full`}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BudgetItem;
