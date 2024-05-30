import React from "react";
import DashboardCard from "../dashboard-card";

const salesGardenData = {
  month: "June 2023",
  numberOfSales: 100,
  amount: 2789,
};

const salesOversizedData = {
  month: "June 2023",
  numberOfSales: 100,
  amount: 1996,
};

function formatNumber(number: number) {
  return number.toLocaleString("en-US");
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MYR",
  }).format(amount);
}
export default function SalesCard() {
  return (
    <>
      <DashboardCard
        title="Payment Collection (Garden Waste)"
        subtitle={
          <div className="flex gap-2">
            <p>{formatNumber(salesGardenData.numberOfSales)} Orders</p>-
            <p>{salesGardenData.month}</p>
          </div>
        }
        body={
          <h1 className="text-[#FF4F5B] font-bold text-xl">
            {formatCurrency(salesGardenData.amount)}
          </h1>
        }
      />
      <DashboardCard
        title="Payment Collection (Oversized Waste)"
        subtitle={
          <div className="flex gap-2">
            <p>{formatNumber(salesOversizedData.numberOfSales)} Orders</p>-
            <p>{salesOversizedData.month}</p>
          </div>
        }
        body={
          <h1 className="text-[#FF4F5B] text-xl font-bold">
            {formatCurrency(salesOversizedData.amount)}
          </h1>
        }
      />
    </>
  );
}
