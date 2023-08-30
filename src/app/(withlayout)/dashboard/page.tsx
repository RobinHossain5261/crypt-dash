import BitcoinChart from "@/components/chart/BitcoinChart";
import LineChart from "@/components/chart/LineChart";
import Image from "next/image";
import React from "react";
import { smallCharts } from "../../../../public/data/dashBoardData";

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

      {/* Line chart  */}
      <section className="mt-6">
        <h3 className="text-white mb-10">Monthly Overall Growth</h3>
        <div className="h-[400px] w-full">
          <LineChart />
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
