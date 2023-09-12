import Image from "next/image";
import React from "react";
import bitcoin from "@/../public/images/dashboardTable/bitcoin.png";
import Progressbar from "@/components/Progressbar/Progressbar";
import { currencyPrices, progres } from "../../../../public/data/walletsData";

const Wallets = () => {
  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="gap-6 grid grid-cols-12">
        <div className="bg-Primary-3 col-span-12 lg:col-span-3 rounded-xl p-2 md:px-7 md:py-6">
          <div className="text-center mt-2 lg:mt-5">
            <div className="flex items-center justify-center gap-2 mb-7">
              <Image
                src={bitcoin}
                alt="currency"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-lg font-bold text-Neutral-6">Bitcoin</span>
            </div>
            <h4 className="text-lg text-Neutral-6 leading-[27px]">
              Total Balance
            </h4>
            <h3 className="text-[40px] lg:text-[32px] font-semibold text-Neutral-9 my-1 lg:my-2">
              0.3475948
            </h3>
            <h5 className="text-lg text-Neutral-8">11,032.24 USD</h5>
            <div className="mt-2 lg:mt-7 flex gap-5 justify-center">
              <button className="text-xs text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] px-2 py-1 rounded-lg ">
                Withdraw
              </button>
              <button className="text-xs text-[#F8FAFC] border border-Neutral-7 hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] px-4 py-2 rounded-lg ">
                Deposit
              </button>
            </div>
          </div>
        </div>
        <div className="bg-Primary-3 col-span-12 lg:col-span-8 rounded-xl p-2 md:px-7 md:py-6">
          {progres.map((item) => (
            <div key={item.id} className="mb-7">
              <div className="flex justify-between mb-4">
                <div>
                  <h5 className="text-base text-Neutral-6 leading-[24px]">
                    {item.name}
                  </h5>
                  <h4 className="text-xl text-white font-semibold leading-[26px] my-2">
                    {item.balance}
                  </h4>
                  <span className="text-sm text-Neutral-8 leading-[21px]">
                    {item.usd}
                  </span>
                </div>
                <div>
                  <Image
                    src={item.chart}
                    alt="chart"
                    className="mb-6 w-[114px] h-9 object-cover"
                  />
                  <span className="text-sm text-white font-bold leading-[21px]">
                    {item.complete}
                  </span>
                </div>
              </div>
              <Progressbar
                fillcolor={item.color}
                bgcolor={item.bgColor}
                completed={item.completed}
                className="progressorRun"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-12">
        <div className="p-2 md:px-7 md:py-5 bg-Primary-3 mt-6 col-span-12 lg:col-span-11 rounded-xl">
          <h5 className="text-xl text-Neutral-6 font-semibold leading-[26px] mb-7">
            Today's Cryptocurrency Prices
          </h5>
          <div className="overflow-x-auto">
            <table className="table whitespace-nowrap">
              <thead>
                <tr className="border-Neutral-7">
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    Asset
                  </th>
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    On Order
                  </th>
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    Available Balance
                  </th>
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    Total Balances
                  </th>
                  <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                    24H Market
                  </th>
                </tr>
              </thead>
              <tbody>
                {currencyPrices.map((item) => (
                  <tr key={item.id} className="border-Neutral-7">
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-6 h-6">
                            <Image src={item.img} alt="curency" />
                          </div>
                        </div>
                        <div>
                          <div className="text-base text-Neutral-6 leading-[24px]">
                            {item.asset}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-base text-Neutral-6 leading-[24px]">
                        {item.order}
                      </div>
                    </td>
                    <td>
                      <div className="text-base text-Neutral-6 leading-[24px]">
                        {item.availableBalance}
                      </div>
                    </td>
                    <td>
                      <div className="text-base text-Neutral-6 leading-[24px]">
                        {item.totalBalance}
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          color: item.color,
                        }}
                        className="text-base text-Neutral-6 leading-[24px] px-3 py-1 rounded"
                      >
                        {item.market}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <hr className="mt-6 border-Neutral-10" />
    </div>
  );
};

export default Wallets;
