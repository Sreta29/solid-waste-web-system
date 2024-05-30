import React from "react";
import SalesCard from "./_components/charts/sales-card";
import TotalWaste from "./_components/charts/total-waste";
import CollecterCard from "./_components/charts/collecter-card";

export default function dashboardPage() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <SalesCard />
        <TotalWaste />
        <CollecterCard />
      </div>
    </>
  );
}
