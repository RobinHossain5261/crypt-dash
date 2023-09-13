"use client";
import React, { Fragment, useState, useRef } from "react";
import profile from "@/../public/images/profile.png";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import "material-symbols";
import { Tab } from "@headlessui/react";
import code from "@/../public/images/Code.png";
import { loginHistory } from "../../../../public/data/settingsData";
import Link from "next/link";

const Settings = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const inputFile: any = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="block lg:flex gap-6 w-full">
        <div className="bg-Primary-3 p-2 lg:px-7 lg:py-6 rounded-xl h-full">
          <div className="relative">
            <Image
              src={profile}
              alt="profile"
              className="w-[180px] h-[180px] rounded-full mx-auto"
            />
            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
            />
            <button
              onClick={onButtonClick}
              className="absolute bottom-2 right-[35%]"
            >
              <span className="w-[30px] h-[30px] p-1 rounded-full bg-Neutral-2 flex items-center justify-center">
                <span className="material-symbols-outlined w-6 h-6 text-Neutral-8">
                  add_photo_alternate
                </span>
              </span>
            </button>
          </div>
          <h4 className="text-white text-2xl font-semibold leading-[31px] text-center mt-5">
            Kim Griffith
          </h4>
          <span className="text-sm text-white leading-[21px] text-center mt-2 block">
            Amet minim Developer
          </span>
          <hr className="my-5 border-Neutral-10" />
          <h6 className="text-Neutral-6 text-base font-semibold leading-[20px] mb-3">
            BIO
          </h6>
          <p className="text-base text-Neutral-6 leading-[24px]">
            Fusce quis tempor augue, congue mollis lorem. Donec et tristique
            massa, a consectetur risus
          </p>
          <hr className="my-5 border-Neutral-10" />
          <h6 className="text-Neutral-6 text-base font-semibold leading-[20px]">
            Social media
          </h6>
          <div className="mt-2 flex gap-3">
            <Link
              href="#"
              className="ri-facebook-fill text-white text-2xl hover:text-Neutral-8 cursor-pointer p-2"
            ></Link>
            <Link
              href="#"
              className="ri-twitter-fill text-white text-2xl hover:text-Neutral-8 cursor-pointer p-2"
            ></Link>
            <Link
              href="#"
              className="ri-instagram-line text-white text-2xl hover:text-Neutral-8 cursor-pointer p-2"
            ></Link>
            <Link
              href="#"
              className="ri-linkedin-fill text-white text-2xl hover:text-Neutral-8 cursor-pointer p-2"
            ></Link>
          </div>
          <hr className="mt-5 border-Neutral-10" />
        </div>
        <div className="bg-Primary-3 p-2 lg:px-7 lg:py-6 rounded-xl w-full h-full mt-6 lg:mt-0">
          <Tab.Group>
            <Tab.List className="flex flex-wrap gap-2 lg:gap-10 mb-8">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-Neutral-8 text-base font-semibold leading-[21px] px-2 py-3 outline-none border-b-2 border-Neutral-8"
                        : " text-white text-base font-semibold leading-[21px] px-2 py-3 outline-none"
                    }
                  >
                    Profile
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-Neutral-8 text-base font-semibold leading-[21px] px-2 py-3 outline-none border-b-2 border-Neutral-8"
                        : " text-white text-base font-semibold leading-[21px] px-2 py-3 outline-none"
                    }
                  >
                    Change Password
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-Neutral-8 text-base font-semibold leading-[21px] px-2 py-3 outline-none border-b-2 border-Neutral-8"
                        : " text-white text-base font-semibold leading-[21px] px-2 py-3 outline-none"
                    }
                  >
                    Two-factor
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-Neutral-8 text-base font-semibold leading-[21px] px-2 py-3 outline-none border-b-2 border-Neutral-8"
                        : " text-white text-base font-semibold leading-[21px] px-2 py-3 outline-none"
                    }
                  >
                    Login Device History
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <form>
                  <div className="lg:flex block gap-[60px] mb-2 lg:mb-6">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          First Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="First Name........."
                        className="w-full px-2 py-[10px] outline-none rounded bg-Primary-3 border border-Neutral-10"
                      />
                    </div>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          Last Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name........."
                        className="w-full px-2 py-[10px] outline-none rounded bg-Primary-3 border border-Neutral-10"
                      />
                    </div>
                  </div>
                  <div className="lg:flex block gap-[60px] mb-2 lg:mb-6">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          Email Address
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Email Address........."
                        className="w-full px-2 py-[10px] outline-none rounded bg-Primary-3 border border-Neutral-10"
                      />
                    </div>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          Phone Number
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="+(1) 987........."
                        className="w-full px-2 py-[10px] outline-none rounded bg-Primary-3 border border-Neutral-10"
                      />
                    </div>
                  </div>
                  <div className="lg:flex block gap-[60px] mb-2 lg:mb-6">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          Joining Date
                        </span>
                      </label>
                      <input
                        type="date"
                        placeholder="Date........."
                        className="w-full px-2 py-[10px] outline-none rounded bg-Primary-3 text-Neutral-1 border border-Neutral-10"
                      />
                    </div>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          City
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="City........."
                        className="w-full px-2 py-[10px] outline-none rounded bg-Primary-3 border border-Neutral-10"
                      />
                    </div>
                  </div>
                  <div className="lg:flex block gap-[60px] mb-2 lg:mb-6">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          Country
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Country........."
                        className="w-full px-2 py-[10px] outline-none rounded bg-Primary-3 border border-Neutral-10"
                      />
                    </div>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          Zip Code
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Zip Code........."
                        className="w-full px-2 py-[10px] outline-none rounded bg-Primary-3 border border-Neutral-10"
                      />
                    </div>
                  </div>
                  <div className="lg:flex block gap-[60px] mb-2 lg:mb-6">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          Deposit Assets
                        </span>
                      </label>
                      <select className=" w-full px-2 py-[10px] outline-none rounded bg-Primary-3 text-Neutral-1 border border-Neutral-10 text-base">
                        <option>Disabled</option>
                        <option>2500</option>
                        <option>3000</option>
                      </select>
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-base text-Neutral-6 font-semibold">
                          Withdraw Assets
                        </span>
                      </label>
                      <select className=" w-full px-2 py-[10px] outline-none rounded bg-Primary-3 text-Neutral-1 border border-Neutral-10 text-base">
                        <option>Enabled 1,11000 USD/Day</option>
                        <option>2500</option>
                        <option>3000</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-control mb-2 lg:mb-6">
                    <label className="label">
                      <span className="text-base text-Neutral-6 font-semibold">
                        Description
                      </span>
                    </label>
                    <textarea
                      className="h-28 text-Neutral-1 bg-Primary-3  rounded outline-none py-[10px] px-2 border border-Neutral-10"
                      placeholder="Description......."
                    ></textarea>
                  </div>
                  <div>
                    <h6 className="text-white text-base font-semibold leading-[20px] mb-3">
                      Deposit Assets
                    </h6>
                    <div className="border border-Neutral-10 px-2 py-[10px] rounded">
                      <div className="flex gap-2 mb-2">
                        <input
                          type="checkbox"
                          className="checkbox border-Neutral-10"
                        />
                        <label className="text-Neutral-5 text-sm leading-[21px]">
                          Promotions
                        </label>
                      </div>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="checkbox"
                          className="checkbox border-Neutral-10"
                        />
                        <label className="text-Neutral-5 text-sm leading-[21px]">
                          Exchange
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          className="checkbox border-Neutral-10"
                        />
                        <label className="text-Neutral-5 text-sm leading-[21px]">
                          Withdrawls
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex gap-5">
                    <button className="text-xs text-[#F8FAFC] leading-[18px] bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg px-4 py-2">
                      Updates
                    </button>
                    <button className="text-xs text-Primary-2 leading-[18px] border border-Primary-2 rounded-lg px-4 py-2">
                      Cancel
                    </button>
                  </div>
                </form>
              </Tab.Panel>
              <Tab.Panel>
                <div className="lg:flex block gap-[60px] mb-2 lg:mb-6">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="text-base text-Neutral-6">
                        Current Password
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type={show ? "text" : "password"}
                        placeholder="Old Password........."
                        className="px-2 py-[10px] rounded w-full bg-Primary-3 text-Neutral-6 border border-Neutral-10 outline-none"
                      />
                      <label
                        onClick={handleShow}
                        className="text-Neutral-1  absolute right-[3%] top-3 cursor-pointer"
                      >
                        {show ? (
                          <span className="material-symbols-outlined">
                            visibility_off
                          </span>
                        ) : (
                          <span className="material-symbols-outlined">
                            visibility
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="text-base text-Neutral-6">
                        Enter new password
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type={show ? "text" : "password"}
                        placeholder="New Password........."
                        className="px-2 py-[10px] rounded w-full bg-Primary-3 text-Neutral-6 border border-Neutral-10 outline-none"
                      />
                      <label
                        onClick={handleShow}
                        className="text-Neutral-1  absolute right-[3%] top-3 cursor-pointer"
                      >
                        {show ? (
                          <span className="material-symbols-outlined">
                            visibility_off
                          </span>
                        ) : (
                          <span className="material-symbols-outlined">
                            visibility
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="lg:flex block gap-[60px] mb-2 lg:mb-6">
                  <div className="form-control w-full lg:w-1/2">
                    <label className="label">
                      <span className="text-base text-Neutral-6">
                        Confirm New Password
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type={show ? "text" : "password"}
                        placeholder="Confirm Password......."
                        className="px-2 py-[10px] rounded w-full bg-Primary-3 text-Neutral-6 border border-Neutral-10 outline-none"
                      />
                      <label
                        onClick={handleShow}
                        className="text-Neutral-1  absolute right-[3%] top-3 cursor-pointer"
                      >
                        {show ? (
                          <span className="material-symbols-outlined">
                            visibility_off
                          </span>
                        ) : (
                          <span className="material-symbols-outlined">
                            visibility
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="w-1/2 relative mt-3 lg:mt-0">
                    <button className="px-4 py-2 text-[#F8FAFC] text-xs bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded lg:absolute lg:bottom-0">
                      {" "}
                      Update Password
                    </button>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="flex items-center gap-6">
                  <div className="">
                    <Image src={code} alt="code" className="object-cover" />
                    <h5 className="text-white text-lg font-bold leading-[27px] mt-3 text-center">
                      Scan Code
                    </h5>
                  </div>
                  <div>
                    <span className="text-Neutral-6 text-sm font-bold leading-[21px] block">
                      Enter the six-digit code from the application
                    </span>
                    <span className="text-Neutral-6 text-sm mt-3 leading-[21px]">
                      After scanning the image, the app will display a six-digit
                      code that you can enter below
                    </span>
                    <form className="my-7">
                      <div className="flex gap-3 ">
                        <input
                          type="text"
                          placeholder="0"
                          className="w-8 h-9 text-center rounded-sm bg-[transparent] border border-Neutral-7 text-Neutral-8 font-bold"
                        />
                        <input
                          type="text"
                          placeholder="0"
                          className="w-8 h-9 text-center rounded-sm bg-[transparent] border border-Neutral-7 text-Neutral-8 font-bold"
                        />
                        <input
                          type="text"
                          placeholder="0"
                          className="w-8 h-9 text-center rounded-sm bg-[transparent] border border-Neutral-7 text-Neutral-8 font-bold"
                        />
                        <input
                          type="text"
                          placeholder="0"
                          className="w-8 h-9 text-center rounded-sm bg-[transparent] border border-Neutral-7 text-Neutral-8 font-bold"
                        />
                        <input
                          type="text"
                          placeholder="0"
                          className="w-8 h-9 text-center rounded-sm bg-[transparent] border border-Neutral-7 text-Neutral-8 font-bold"
                        />
                        <input
                          type="text"
                          placeholder="0"
                          className="w-8 h-9 text-center rounded-sm bg-[transparent] border border-Neutral-7 text-Neutral-8 font-bold"
                        />
                      </div>
                      <span className="text-xs text-Neutral-6 leading-[18px] mt-2">
                        Enter six- digit code
                      </span>
                    </form>
                    <button className="text-xs text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg outline-none px-4 py-2">
                      Download 2FA App
                    </button>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h5 className="text-xl font-semibold text-Neutral-6 leading-[26px]">
                  Login Device History
                </h5>
                <hr className="my-7 border-Neutral-10" />
                <div className="overflow-x-auto">
                  <table className="table whitespace-nowrap">
                    <thead>
                      <tr className="border-Neutral-7">
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Date/Time
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Device List
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Location
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          IP Address
                        </th>
                        <th className="text-base font-bold text-Neutral-6 leading-[24px]">
                          Active Device
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loginHistory.map((item) => (
                        <tr key={item.id} className="border-Neutral-7">
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.date}
                            </div>
                          </td>

                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.device}
                            </div>
                          </td>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.location}
                            </div>
                          </td>
                          <td>
                            <div className="text-base text-Neutral-6 leading-[24px]">
                              {item.ip}
                            </div>
                          </td>
                          <td>
                            <div className="flex items-center gap-2">
                              <div
                                style={{ backgroundColor: item.color }}
                                className="w-2 h-2  rounded-full"
                              ></div>
                              <span className="text-base text-Neutral-6 leading-[24px]">
                                {item.active}
                              </span>
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
      {/* <hr className="mt-6 border-Neutral-10" /> */}
    </div>
  );
};

export default Settings;
