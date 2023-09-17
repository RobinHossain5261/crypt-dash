"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import "material-symbols";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

import {
  curencys,
  curencysAmount,
  deepTrades,
  priceTrades,
} from "../../../../public/data/exchangeData";
import DoughnutChart from "@/components/chart/DoughnutChart";
import CandleStickLineChart from "@/components/chart/CandleStickLineChart";
import CandlestickChart from "@/components/chart/CandleStickChart";

const Exchange = () => {
  const [selectedCurencys, setSelectedCurencys] = useState(curencys[0]);
  const [selectedAmount, setSelectedAmount] = useState(curencysAmount[0]);
  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="bg-Primary-3 px-7 py-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xxl:grid-cols-6 rounded-xl">
        <div>
          <Listbox value={selectedCurencys} onChange={setSelectedCurencys}>
            <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6  py-2 px-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm lg:border-r border-Neutral-10 cursor-pointer">
              <span className="flex gap-2 items-center ">
                <span className="material-symbols-outlined">expand_more</span>
                <span className="flex gap-2 items-center">
                  <Image
                    className="w-10 h-10 rounded-full"
                    src={selectedCurencys.img}
                    alt="curency"
                  />
                  <span>
                    <span className="block text-base text-Neutral-6 leading-[24px]">
                      {selectedCurencys.name}
                    </span>
                    <span className="block text-Neutral-5 text-xs leading-[18px]">
                      {selectedCurencys.coin}
                    </span>
                  </span>
                </span>
              </span>
            </Listbox.Button>
            <Listbox.Options className="w-[200px] bg-Primary-3 text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer z-[5]">
              {curencys.map((curency) => (
                <Listbox.Option
                  key={curency.id}
                  value={curency}
                  disabled={curency.unavailable}
                >
                  <li>
                    <span className="flex items-center gap-2 mt-4">
                      <Image
                        className="w-10 h-10 rounded-full"
                        src={curency.img}
                        alt="curency"
                      />
                      <span>
                        <span className="block text-base text-Neutral-6 leading-[24px]">
                          {curency.name}
                        </span>
                        <span className="block text-Neutral-5 text-xs leading-[18px]">
                          {curency.coin}
                        </span>
                      </span>
                    </span>
                  </li>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            Price
          </h3>
          <span className="text-xs font-bold text-Neutral-8 leading-[18px]">
            21,264.95
          </span>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h change
          </h3>
          <span className="text-xs font-bold text-Neutral-8 leading-[18px]">
            21,264.95
          </span>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h high
          </h3>
          <span className="text-xs font-bold text-Primary-2 leading-[18px] flex">
            21,264.95
            <span className="material-symbols-outlined iconSize ml-2">
              insights
            </span>
          </span>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h low
          </h3>
          <span className="text-xs font-bold text-Neutral-8 leading-[18px] flex">
            31,239.04
            <span className="material-symbols-outlined iconSize ml-2">
              insights
            </span>
          </span>
        </div>
        <div className="px-[45px]">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h change
          </h3>
          <span className="text-xs font-bold text-Neutral-5 leading-[18px]">
            19,411,867
          </span>
        </div>
      </section>

      {/* Chart part start  */}
      <section className="mt-6 gap-6 grid grid-cols-12">
        <div className="bg-Primary-3 px-2 lg:px-7 py-6 rounded-xl col-span-12 lg:col-span-8">
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                        : "text-Neutral-6 text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                    }
                  >
                    Price Chart
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                        : "text-Neutral-6 text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                    }
                  >
                    Deep Chart
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-6">
              <Tab.Panel>
                <CandlestickChart />
              </Tab.Panel>
              <Tab.Panel className="h-[200px] lg:h-[330px]">
                <CandleStickLineChart />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Doughunt chart  */}
        <div className="bg-Primary-3 col-span-12 lg:col-span-4 rounded-xl p-2 md:px-7 md:py-6">
          <DoughnutChart />
          <div className="text-center mt-2 lg:mt-5">
            <h4 className="text-xl xxl:text-2xl text-Neutral-6 leading-[36px]">
              Total Balance
            </h4>
            <h3 className="text-3xl xxl:text-[40px] font-semibold text-Neutral-9 my-1 lg:my-3">
              0.3475948
            </h3>
            <h5 className="text-lg text-Neutral-8">11,032.24 USD</h5>
            <button className="text-xs text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] px-2 py-1 rounded-lg mt-2 lg:mt-6">
              Withdraw
            </button>
          </div>
        </div>
      </section>

      {/* Market Trades */}
      <section className="mt-6 gap-6 grid grid-cols-12">
        <div className="bg-Primary-3 p-2 lg:px-7 lg:py-6 rounded-xl col-span-12 lg:col-span-8">
          <div>
            <Tab.Group>
              <div className="flex flex-wrap gap-2 justify-between items-center">
                <h5 className="text-xl font-semibold text-Neutral-6 leading-[26px]">
                  Market Trades
                </h5>
                <Tab.List>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                            : "text-Neutral-6 text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                        }
                      >
                        Price Chart
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] text-xs leading-[18px] px-3 py-1 rounded outline-none border border-Neutral-7"
                            : "text-Neutral-6 text-xs leading-[18px] px-3 py-1 rounded outline-none border border-Neutral-7"
                        }
                      >
                        Deep Chart
                      </button>
                    )}
                  </Tab>
                </Tab.List>
              </div>
              <hr className="border-Neutral-10 my-5" />
              <Tab.Panels>
                <Tab.Panel>
                  <div className="overflow-x-auto">
                    <table className="table whitespace-nowrap">
                      <thead>
                        <tr className="border-Neutral-7">
                          <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                            Time
                          </th>
                          <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                            Price (USDT)
                          </th>
                          <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                            Amount (BTC)
                          </th>
                          <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                            Total (USDT)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {priceTrades.map((trade) => (
                          <tr key={trade.id} className="border-Neutral-7">
                            <td>
                              <div className="text-base text-Neutral-6 leading-[24px]">
                                {trade.time}
                              </div>
                            </td>
                            <td>
                              <div className="text-base text-Neutral-6 leading-[24px]">
                                {trade.Price}
                              </div>
                            </td>
                            <td>
                              <div className="text-base text-Neutral-6 leading-[24px]">
                                {trade.amount}
                              </div>
                            </td>
                            <td>
                              <div className="text-base text-Neutral-6 leading-[24px]">
                                {trade.total}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="overflow-x-auto">
                    <table className="table whitespace-nowrap">
                      <thead>
                        <tr className="border-Neutral-7">
                          <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                            Time
                          </th>
                          <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                            Price (USDT)
                          </th>
                          <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                            Amount (BTC)
                          </th>
                          <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                            Total (USDT)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {deepTrades.map((trade) => (
                          <tr key={trade.id} className="border-Neutral-7">
                            <td>
                              <div className="text-base text-Neutral-6 leading-[24px]">
                                {trade.time}
                              </div>
                            </td>
                            <td>
                              <div className="text-base text-Neutral-6 leading-[24px]">
                                {trade.Price}
                              </div>
                            </td>
                            <td>
                              <div className="text-base text-Neutral-6 leading-[24px]">
                                {trade.amount}
                              </div>
                            </td>
                            <td>
                              <div className="text-base text-Neutral-6 leading-[24px]">
                                {trade.total}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

        <div className="bg-Primary-3 p-3 lg:p-7 rounded-xl col-span-12 lg:col-span-4">
          <Tab.Group>
            <Tab.List className="flex flex-wrap gap-5">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-Neutral-6 bg-gradient-to-r from-[#33AB71] to-[#06753F] text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[100px]"
                        : "text-Neutral-6 text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[100px]"
                    }
                  >
                    Buy
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-Neutral-6 bg-gradient-to-r from-[#33AB71] to-[#06753F] text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[100px]"
                        : "text-Neutral-6 text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[100px]"
                    }
                  >
                    Sell
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-Neutral-6 bg-gradient-to-r from-[#33AB71] to-[#06753F] text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[100px]"
                        : "text-Neutral-6 text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[100px]"
                    }
                  >
                    Exchange
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-8">
              <Tab.Panel>
                <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                  Coin
                </h5>
                <Listbox
                  value={selectedCurencys}
                  onChange={setSelectedCurencys}
                >
                  <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg  py-3 px-4 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer">
                    <span className="flex gap-2 items-center justify-between w-full">
                      <span className="flex gap-2 items-center flex-1">
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={selectedCurencys.img}
                          alt="curency"
                        />
                        <span className="flex flex-1 flex-wrap justify-between gap-2">
                          <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                            {selectedCurencys.coin}
                          </span>
                          <span className="text-xl text-Neutral-6 leading-[24px]">
                            {selectedCurencys.sort}
                          </span>
                        </span>
                      </span>
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer z-10">
                    {curencys.map((curency) => (
                      <Listbox.Option
                        key={curency.id}
                        value={curency}
                        disabled={curency.unavailable}
                      >
                        <span>
                          <span className="flex items-center gap-2 mt-4">
                            <Image
                              className="w-10 h-10 rounded-full"
                              src={curency.img}
                              alt="curency"
                            />
                            <span>
                              <span className="block text-base text-Neutral-6 leading-[24px]">
                                {curency.name}
                              </span>
                              <span className="block text-Neutral-5 text-xs leading-[18px]">
                                {curency.coin}
                              </span>
                            </span>
                          </span>
                        </span>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
                <div className="mt-6">
                  <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                    Amount
                  </h5>
                  <Listbox value={selectedAmount} onChange={setSelectedAmount}>
                    <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer px-4 py-5">
                      <span className="flex gap-2 items-center justify-between w-full">
                        <span className="flex flex-wrap justify-between gap-2">
                          <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                            {selectedAmount.money}
                          </span>
                        </span>
                        <span className="material-symbols-outlined">
                          expand_more
                        </span>
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer">
                      {curencysAmount.map((amount) => (
                        <Listbox.Option key={amount.id} value={amount}>
                          <li>
                            <span className="block text-Neutral-5 text-base leading-[18px] mt-2">
                              {amount.money}
                            </span>
                          </li>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                  <div className="flex flex-wrap justify-between mt-6">
                    <span className="text-Neutral-6 text-base leading-[24px]">
                      Total:
                    </span>
                    <span className="text-Neutral-6 text-base font-bold leading-[27px]">
                      $1,342.00
                    </span>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button className="text-[#F8FAFC] text-base px-4 py-2 bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg leading-[18px]">
                    Buy Bitcoin
                  </button>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                  Coin
                </h5>
                <Listbox
                  value={selectedCurencys}
                  onChange={setSelectedCurencys}
                >
                  <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg  py-3 px-4 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer">
                    <span className="flex gap-2 items-center justify-between w-full">
                      <span className="flex gap-2 items-center flex-1">
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={selectedCurencys.img}
                          alt="curency"
                        />
                        <span className="flex flex-1 flex-wrap justify-between gap-2">
                          <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                            {selectedCurencys.coin}
                          </span>
                          <span className="text-xl text-Neutral-6 leading-[24px]">
                            {selectedCurencys.sort}
                          </span>
                        </span>
                      </span>
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer z-10">
                    {curencys.map((curency) => (
                      <Listbox.Option
                        key={curency.id}
                        value={curency}
                        disabled={curency.unavailable}
                      >
                        <span>
                          <span className="flex items-center gap-2 mt-4">
                            <Image
                              className="w-10 h-10 rounded-full"
                              src={curency.img}
                              alt="curency"
                            />
                            <span>
                              <span className="block text-base text-Neutral-6 leading-[24px]">
                                {curency.name}
                              </span>
                              <span className="block text-Neutral-5 text-xs leading-[18px]">
                                {curency.coin}
                              </span>
                            </span>
                          </span>
                        </span>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
                <div className="mt-6">
                  <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                    Amount
                  </h5>
                  <Listbox value={selectedAmount} onChange={setSelectedAmount}>
                    <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer px-4 py-5">
                      <span className="flex gap-2 items-center justify-between w-full">
                        <span className="flex flex-wrap justify-between gap-2">
                          <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                            {selectedAmount.money}
                          </span>
                        </span>
                        <span className="material-symbols-outlined">
                          expand_more
                        </span>
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer">
                      {curencysAmount.map((amount) => (
                        <Listbox.Option key={amount.id} value={amount}>
                          <li>
                            <span className="block text-Neutral-5 text-base leading-[18px] mt-2">
                              {amount.money}
                            </span>
                          </li>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                  <div className="flex flex-wrap justify-between mt-6">
                    <span className="text-Neutral-6 text-base leading-[24px]">
                      Total:
                    </span>
                    <span className="text-Neutral-6 text-base font-bold leading-[27px]">
                      $1,342.00
                    </span>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button className="text-[#F8FAFC] text-base px-4 py-2 bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg leading-[18px]">
                    Buy Bitcoin
                  </button>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                  Coin
                </h5>
                <Listbox
                  value={selectedCurencys}
                  onChange={setSelectedCurencys}
                >
                  <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg  py-3 px-4 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer">
                    <span className="flex gap-2 items-center justify-between w-full">
                      <span className="flex gap-2 items-center flex-1">
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={selectedCurencys.img}
                          alt="curency"
                        />
                        <span className="flex flex-1 flex-wrap justify-between gap-2">
                          <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                            {selectedCurencys.coin}
                          </span>
                          <span className="text-xl text-Neutral-6 leading-[24px]">
                            {selectedCurencys.sort}
                          </span>
                        </span>
                      </span>
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer z-10">
                    {curencys.map((curency) => (
                      <Listbox.Option
                        key={curency.id}
                        value={curency}
                        disabled={curency.unavailable}
                      >
                        <span>
                          <span className="flex items-center gap-2 mt-4">
                            <Image
                              className="w-10 h-10 rounded-full"
                              src={curency.img}
                              alt="curency"
                            />
                            <span>
                              <span className="block text-base text-Neutral-6 leading-[24px]">
                                {curency.name}
                              </span>
                              <span className="block text-Neutral-5 text-xs leading-[18px]">
                                {curency.coin}
                              </span>
                            </span>
                          </span>
                        </span>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
                <div className="mt-6">
                  <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                    Amount
                  </h5>
                  <Listbox value={selectedAmount} onChange={setSelectedAmount}>
                    <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer px-4 py-5">
                      <span className="flex gap-2 items-center justify-between w-full">
                        <span className="flex flex-wrap justify-between gap-2">
                          <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                            {selectedAmount.money}
                          </span>
                        </span>
                        <span className="material-symbols-outlined">
                          expand_more
                        </span>
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer">
                      {curencysAmount.map((amount) => (
                        <Listbox.Option key={amount.id} value={amount}>
                          <li>
                            <span className="block text-Neutral-5 text-base leading-[18px] mt-2">
                              {amount.money}
                            </span>
                          </li>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                  <div className="flex flex-wrap justify-between mt-6">
                    <span className="text-Neutral-6 text-base leading-[24px]">
                      Total:
                    </span>
                    <span className="text-Neutral-6 text-base font-bold leading-[27px]">
                      $1,342.00
                    </span>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button className="text-[#F8FAFC] text-base px-4 py-2 bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg leading-[18px]">
                    Buy Bitcoin
                  </button>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Exchange;
