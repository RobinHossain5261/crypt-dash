import LineChart from "@/components/chart/LineChart";
import Image from "next/image";
import React from "react";
import { smallCharts } from "../../../../public/data/dashBoardData";
import DoughnutChart from "@/components/chart/DoughnutChart";

const DashBoard = () => {
  return (
    <div className="bg-Primary-bg p-6 min-h-screen">
      {/* Small charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {smallCharts.map((chart) => (
          <div className="px-5 py-4 bg-Primary-3 rounded-lg">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <span className="text-base text-Neutral-9">{chart.name}</span>
                <h4 className="text-2xl text-Neutral-9 font-semibold mt-2">
                  {chart.price}
                </h4>
              </div>
              <Image
                className="w-10 h-10 rounded-full"
                src={chart.img}
                alt="bitcoin"
              />
            </div>
            <div className="h-[55px] w-full mt-5">{chart.chart}</div>
          </div>
        ))}
      </section>

      {/* Monthly Overall Growth  */}
      <section className="mt-6 gap-6 grid grid-cols-12">
        {/* Line chart  */}
        <div className="bg-Primary-3 rounded-xl px-7 py-6 w-full col-span-12 lg:col-span-9">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h3 className="text-Neutral-6 text-xl font-semibold leading-[26px]">
              Monthly Overall Growth
            </h3>
            <div className="flex flex-wrap gap-4">
              <span className="text-xs text-Neutral-6 font-medium leading-[18px] px-3 py-1 border border-Neutral-7 rounded hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500">
                Week
              </span>
              <span className="text-xs text-Neutral-6 font-medium leading-[18px] px-3 py-1 border border-Neutral-7 rounded hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500">
                Month
              </span>
              <span className="text-xs text-Neutral-6 font-medium leading-[18px] px-3 py-1 border border-Neutral-7 rounded hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500">
                Year
              </span>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <LineChart />
          </div>
        </div>
        {/* Doughunt chart  */}
        <div className="bg-Primary-3 col-span-12 lg:col-span-3 rounded-xl px-7 py-6">
          <DoughnutChart />
          <div className="text-center mt-5">
            <h4 className="text-2xl text-Neutral-6 leading-[36px]">
              Total Balance
            </h4>
            <h3 className="text-[32px] font-semibold text-Neutral-9 my-3">
              0.3475948
            </h3>
            <h5 className="text-lg text-Neutral-8">11,032.24 USD</h5>
            <button className="text-xs text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] px-2 py-1 rounded-xl mt-6">
              Withdraw
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
