"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { history } from "../../../../public/data/activitiesData";
import Image from "next/image";

const Activities = () => {
  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="grid grid-cols-12">
        <div className="bg-Primary-3 px-7 py-6 rounded-xl col-span-12 lg:col-span-11">
          <Tab.Group>
            <div className="flex justify-between items-center">
              <h5 className="text-xl text-Neutral-6 font-semibold">History</h5>
              <div className="flex gap-3 items-center">
                <Tab.List className="flex gap-3">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "px-4 py-2 text-[#F8FAFC] text-xs bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg outline-none flex items-center"
                            : "px-4 py-2 text-Neutral-1 border border-Neutral-10 text-xs rounded-lg outline-none flex items-center"
                        }
                      >
                        All
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "px-4 py-2 text-[#F8FAFC] text-xs bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg outline-none flex items-center"
                            : "px-4 py-2 text-Neutral-1 border border-Neutral-10 text-xs rounded-lg outline-none flex items-center"
                        }
                      >
                        Withdraw
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "px-4 py-2 text-[#F8FAFC] text-xs bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg outline-none flex items-center"
                            : "px-4 py-2 text-Neutral-1 border border-Neutral-10 text-xs rounded-lg outline-none flex items-center"
                        }
                      >
                        Withdrawls
                      </button>
                    )}
                  </Tab>
                </Tab.List>
                <select className="bg-Primary-3 text-Neutral-5 text-base border border-Neutral-10 px-4 py-2 rounded-lg outline-none">
                  <option>All Times</option>
                  <option>This Month</option>
                  <option>This Week</option>
                </select>
              </div>
            </div>
            <hr className="my-6 border-Neutral-10" />
            <Tab.Panels>
              <Tab.Panel>
                <div className="overflow-x-auto">
                  <table className="table whitespace-nowrap">
                    <thead>
                      <tr className="border-Neutral-7">
                        <th>
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox border-Neutral-10"
                            />
                          </label>
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Transaction ID
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Type
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Date
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Status
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((item) => (
                        <tr key={item.id} className="border-Neutral-7">
                          <th>
                            <label>
                              <input
                                type="checkbox"
                                className="checkbox border-Neutral-10"
                              />
                            </label>
                          </th>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.transaction}
                            </div>
                          </td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-6 h-6">
                                  <Image src={item.img} alt="curency" />
                                </div>
                              </div>
                              <div>
                                <div className="text-base text-Neutral-6 leading-[24px]">
                                  {item.type}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.date}
                            </div>
                          </td>
                          <td>
                            <div
                              style={{
                                color: item.color,
                              }}
                              className="text-base text-Neutral-6 leading-[24px]"
                            >
                              {item.status}
                            </div>
                          </td>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.amount}
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
                        <th>
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox border-Neutral-10"
                            />
                          </label>
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Transaction ID
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Type
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Date
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Status
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((item) => (
                        <tr key={item.id} className="border-Neutral-7">
                          <th>
                            <label>
                              <input
                                type="checkbox"
                                className="checkbox border-Neutral-10"
                              />
                            </label>
                          </th>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.transaction}
                            </div>
                          </td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-6 h-6">
                                  <Image src={item.img} alt="curency" />
                                </div>
                              </div>
                              <div>
                                <div className="text-base text-Neutral-6 leading-[24px]">
                                  {item.type}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.date}
                            </div>
                          </td>
                          <td>
                            <div
                              style={{
                                color: item.color,
                              }}
                              className="text-base text-Neutral-6 leading-[24px]"
                            >
                              {item.status}
                            </div>
                          </td>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.amount}
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
                        <th>
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox border-Neutral-10"
                            />
                          </label>
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Transaction ID
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Type
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Date
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Status
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((item) => (
                        <tr key={item.id} className="border-Neutral-7">
                          <th>
                            <label>
                              <input
                                type="checkbox"
                                className="checkbox border-Neutral-10"
                              />
                            </label>
                          </th>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.transaction}
                            </div>
                          </td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-6 h-6">
                                  <Image src={item.img} alt="curency" />
                                </div>
                              </div>
                              <div>
                                <div className="text-base text-Neutral-6 leading-[24px]">
                                  {item.type}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.date}
                            </div>
                          </td>
                          <td>
                            <div
                              style={{
                                color: item.color,
                              }}
                              className="text-base text-Neutral-6 leading-[24px]"
                            >
                              {item.status}
                            </div>
                          </td>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.amount}
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
      </section>
    </div>
  );
};

export default Activities;
