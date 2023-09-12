"use client";
import Image from "next/image";
import { smallCharts } from "../../../../public/data/dashBoardData";
import { prices } from "../../../../public/data/pricesData";
import "material-symbols";

const Prices = () => {
  // table star button color toggle
  const handleActiveColor = (event: any) => {
    event.currentTarget.classList.toggle("text-Primary-2");
  };

  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {smallCharts.map((chart) => (
          <div key={chart.id} className="px-5 py-4 bg-Primary-3 rounded-lg">
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
      <section className="mt-6 bg-Primary-3 rounded-xl p-2 lg:px-7 lg:py-6">
        <div className="flex flex-wrap items-center justify-between">
          <h5 className="text-xl font-semibold text-white leading-[26px] mb-5">
            Cryptocurrency Prices
          </h5>
          <div className="flex flex-wrap gap-6 items-center">
            <form className="flex items-center border border-Neutral-10 text-Neutral-5 text-base rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-Primary-3"
              />
              <span className="material-symbols-outlined cursor-pointer w-[15px] h-[15px] bg-Primary-3 text-Neutral-6 mb-2">
                search
              </span>
            </form>
            <select className="select select-bordered bg-Primary-3 text-Neutral-5 text-base border border-Neutral-10">
              <option selected>All Times</option>
              <option>This Month</option>
              <option>This Week</option>
            </select>
          </div>
        </div>
        <hr className="my-7 border-Neutral-10" />
        <div className="overflow-x-auto">
          <table className="table whitespace-nowrap">
            <thead>
              <tr className="border-Neutral-7">
                <th></th>
                <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                  #
                </th>
                <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                  Name
                </th>
                <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                  Price
                </th>
                <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                  24h%
                </th>
                <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                  Market Cap
                </th>
                <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                  Volume
                </th>
                <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                  Charts
                </th>
              </tr>
            </thead>
            <tbody>
              {prices.map((data) => (
                <tr key={data.id} className="border-Neutral-7">
                  <td>
                    <span
                      onClick={handleActiveColor}
                      className="material-symbols-outlined text-Neutral-6 cursor-default"
                    >
                      star
                    </span>
                  </td>
                  <td>
                    <div className="text-base text-Neutral-6 leading-[24px]">
                      {data.id}
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
                          {data.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-base text-Neutral-6 leading-[24px]">
                      {data.price}
                    </div>
                  </td>

                  <td>
                    <div
                      style={{
                        color: data.color,
                      }}
                      className="text-base text-Neutral-6 leading-[24px] px-3 py-1 rounded"
                    >
                      {data.parcent}
                    </div>
                  </td>
                  <td>
                    <div className="text-base text-Neutral-6 leading-[24px]">
                      {data.cap}
                    </div>
                  </td>
                  <td>
                    <div className="text-base text-Neutral-6 leading-[24px]">
                      {data.volume}
                    </div>
                  </td>
                  <td>
                    <Image
                      src={data.charts}
                      alt="charts"
                      className="object-cover"
                    />
                  </td>
                  <th>
                    <button className="text-[#F8FAFC] text-xs leading-[18px] px-3 py-1 rounded border border-Neutral-10 hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500 cursor-pointer">
                      Trade
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <hr className="mt-6 border-Neutral-10" />
    </div>
  );
};

export default Prices;
