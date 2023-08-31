import React from "react";
import bitcoin from "@/../public/images/bitcoin.png";
import Image from "next/image";
import "material-symbols";

const Exchange = () => {
  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="bg-Primary-3 px-7 py-5">
        <div className="flex gap-2 items-center">
          <Image
            className="w-10 h-10 rounded-full"
            src={bitcoin}
            alt="curency"
          />
          <div>
            <h4 className="text-base text-Neutral-6 leading-[24px]">
              BTC/USDT
            </h4>
            <span className="text-Neutral-5 text-xs leading-[18px]">
              Bitcoin
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            Price
          </h3>
          <span className="text-xs font-bold text-Neutral-8 leading-[18px]">
            21,264.95
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h change
          </h3>
          <span className="text-xs font-bold text-Neutral-8 leading-[18px]">
            21,264.95
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h high
          </h3>
          <span className="text-xs font-bold text-Primary-2 leading-[18px]">
            21,264.95
            <span className="material-symbols-outlined">insights</span>
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h low
          </h3>
          <span className="text-xs font-bold text-Neutral-8 leading-[18px]">
            31,239.04<span className="material-symbols-outlined">insights</span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Exchange;
