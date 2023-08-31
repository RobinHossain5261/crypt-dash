import LineChart from "@/components/chart/LineChart";
import Image from "next/image";
import React from "react";
import {
  smallCharts,
  tableData,
  transactions,
} from "../../../../public/data/dashBoardData";
import DoughnutChart from "@/components/chart/DoughnutChart";

const DashBoard = () => {
  return (
    <div className="bg-Primary-bg p-3 lg:p-6">
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
            <div className="h-[55px] w-full mt-2 lg:mt-5">{chart.chart}</div>
          </div>
        ))}
      </section>

      {/* Monthly Overall Growth  */}
      <section className="mt-6 gap-6 grid grid-cols-12">
        {/* Line chart  */}
        <div className="bg-Primary-3 rounded-xl p-2 lg:px-7 lg:py-6 col-span-12 lg:col-span-9">
          <div className="flex gap-3 flex-wrap justify-between items-center mb-6">
            <h3 className="text-Neutral-6 text-xl font-semibold leading-[26px]">
              Monthly Overall Growth
            </h3>
            <div className="flex flex-wrap gap-2 lg:gap-4">
              <span className="text-xs text-Neutral-6 font-medium leading-[18px] px-3 py-1 border border-Neutral-7 rounded hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500 cursor-pointer">
                Week
              </span>
              <span className="text-xs text-Neutral-6 font-medium leading-[18px] px-3 py-1 border border-Neutral-7 rounded hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500 cursor-pointer">
                Month
              </span>
              <span className="text-xs text-Neutral-6 font-medium leading-[18px] px-3 py-1 border border-Neutral-7 rounded hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500 cursor-pointer">
                Year
              </span>
            </div>
          </div>
          <div className="h-[200px] lg:h-[300px] w-full">
            <LineChart />
          </div>
        </div>
        {/* Doughunt chart  */}
        <div className="bg-Primary-3 col-span-12 lg:col-span-3 rounded-xl p-2 md:px-7 md:py-6">
          <DoughnutChart />
          <div className="text-center mt-2 lg:mt-5">
            <h4 className="text-2xl text-Neutral-6 leading-[36px]">
              Total Balance
            </h4>
            <h3 className="text-[32px] font-semibold text-Neutral-9 my-1 lg:my-3">
              0.3475948
            </h3>
            <h5 className="text-lg text-Neutral-8">11,032.24 USD</h5>
            <button className="text-xs text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] px-2 py-1 rounded-xl mt-2 lg:mt-6">
              Withdraw
            </button>
          </div>
        </div>
      </section>

      <section className="mt-6 gap-6 grid grid-cols-12">
        {/* Table start */}
        <div className="bg-Primary-3 rounded-xl p-2 lg:px-7 lg:py-6 col-span-12 lg:col-span-9">
          <h5 className="text-xl font-semibold text-white leading-[26px] mb-5">
            Active Overall Growth
          </h5>
          <div className="overflow-x-auto">
            <table className="table whitespace-nowrap">
              <thead>
                <tr className="border-Neutral-7">
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    Type
                  </th>
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    Asset
                  </th>
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    Date
                  </th>
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    IP Address
                  </th>
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    Status List
                  </th>
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => (
                  <tr key={data.id} className="border-Neutral-7">
                    <td>
                      <div className="text-base text-Neutral-6 leading-[24px]">
                        {data.type}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-6 h-6">
                            <Image src={data.img} alt="curency" />
                          </div>
                        </div>
                        <div>
                          <div className="text-base text-Neutral-6 leading-[24px]">
                            {data.asset}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-base text-Neutral-6 leading-[24px]">
                        {data.date}
                      </div>
                    </td>
                    <td>
                      <div className="text-base text-Neutral-6 leading-[24px]">
                        {data.ip}
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          backgroundColor: data.bgColor,
                          color: data.color,
                        }}
                        className="text-base text-Neutral-6 leading-[24px] px-3 py-1 rounded"
                      >
                        {data.status}
                      </div>
                    </td>
                    <td>
                      <div className="text-base text-Neutral-6 leading-[24px]">
                        {data.amount}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Recent Transaction */}
        <div className="bg-Primary-3 col-span-12 lg:col-span-3 rounded-xl p-2 lg:px-7 lg:py-6">
          <h5 className="text-xl font-semibold leading-[26px] text-white mb-4">
            Recent Transaction
          </h5>
          <div>
            {transactions.map((transaction) => (
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Image
                      className="w-8 h-8 rounded-full"
                      src={transaction.img}
                      alt="currency"
                    />
                    <div>
                      <h4 className="text-base text-white Neutral-6 leading-[21px]">
                        {transaction.asset}
                      </h4>
                      <span className="text-sm text-Neutral-6 leading-[21px]">
                        {transaction.time}
                      </span>
                    </div>
                  </div>
                  <h5 className="text-white text-xl font-semibold leading-[26px]">
                    {transaction.money}
                  </h5>
                </div>
                <hr className="border-Neutral-7 my-3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
