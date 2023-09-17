import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, Fragment } from "react";
import user from "@/../public/images/user.png";
import {
  messages,
  notifications,
  profile,
} from "../../../public/data/TopbarData";
import { Menu, Transition } from "@headlessui/react";

type propsType = {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

const TopBar = ({ showNav, setShowNav }: propsType) => {
  return (
    <div
      className={`bg-Primary-3 left-0 py-5  z-[5] fixed w-full flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "lg:pl-[280px] md:pl-[280px] pl-[100%]" : ""
      }`}
    >
      <div className="flex items-center gap-2 py-2">
        <button
          onClick={() => setShowNav(!showNav)}
          className="md:hidden  text-white bg-Primary-bg flex items-center ml-4 p-1 rounded"
        >
          <span className="material-symbols-outlined  cursor-pointer !text-[40px]">
            menu
          </span>
        </button>
        <form className="hidden lg:flex items-center border border-Neutral-1 px-4 py-3 rounded-lg ml-8">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-Neutral-5 bg-Primary-3"
          />
          <span className="material-symbols-outlined cursor-pointer text-Neutral-6">
            search
          </span>
        </form>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        {/* message dropdriwn menu  */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-Primary-bg p-1 px-3 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative cursor-pointer">
            <span className="material-symbols-outlined  text-white !text-3xl md:!text-[40px] mt-1">
              message
            </span>
            <span className="absolute h-3 w-3 rounded-full bg-Primary-2 flex justify-center items-center bottom-[11px] left-[10px] border border-white"></span>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute -right-28 mt-4 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none identify">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <div className="w-64 lg:w-80 bg-Neutral-10 p-3 rounded-xl">
                    <h3 className="text-2xl text-white font-bold text-center">
                      Message
                    </h3>
                    <hr className="my-2 lg:my-3 border-Neutral-7" />
                    {messages.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center gap-3 py-2 duration-200 cursor-pointer hover:bg-Neutral-8 p-2 rounded"
                      >
                        <Image
                          className="w-10 h-10 md:w-[60px] md:h-[60px]"
                          src={data.img}
                          alt="buyer"
                        />
                        <div>
                          <h4 className=" font-bold text-base md:text-lg text-white leading-[27px]">
                            {data.name}
                          </h4>
                          <p className="text-Neutral-6 text-xs leading-[18px]">
                            {data.comment}
                          </p>
                          <p className="text-Neutral-6 text-base leading-[24px]">
                            {data.des}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* notification dropdown menu  */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-Primary-bg  px-3 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative cursor-pointer">
            <span className="material-symbols-outlined  text-white !text-3xl !text-[40px] mt-1">
              notifications
            </span>
            <span className="absolute h-3 w-3 rounded-full bg-Primary-2 flex justify-center items-center bottom-[11px] left-4 border border-white"></span>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute -right-8 mt-4 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none identify-notificition">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <div className="w-64 lg:w-80 bg-Neutral-10 p-3 rounded-xl">
                    <h3 className="text-2xl text-white font-bold text-center">
                      Notifications
                    </h3>
                    <hr className="my-2 lg:my-3 border-Neutral-7" />
                    {notifications.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center gap-3 py-2 duration-200 cursor-pointer hover:bg-Neutral-8 p-2 rounded"
                      >
                        <Image
                          className="w-10 h-10 md:w-[60px] md:h-[60px]"
                          src={data.img}
                          alt="buyer"
                        />
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-white leading-[27px]">
                            {data.name}
                          </h4>
                          <p className="text-Neutral-6 text-xs leading-[18px]">
                            {data.comment}
                          </p>
                          <p className="text-Neutral-6 text-base leading-[24px]">
                            {data.des}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Profile dropdown menu */}
        <Menu
          as="div"
          className="relative inline-block text-left pr-3 md:pr-6 lg:pr-10"
        >
          <Menu.Button>
            <div className="flex items-center cursor-pointer">
              <div>
                <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full mr-3">
                  <Image src={user} alt="User" />
                </div>
              </div>
              <div className="lg:flex items-center hidden">
                <div>
                  <h5 className="text-base text-white font-semibold">
                    Kim Griffith
                  </h5>
                  <h6 className="text-xs text-Neutral-6 text-left">Admin</h6>
                </div>
              </div>
            </div>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <div className="w-52 bg-Neutral-10 p-3 rounded-xl">
                    <h5 className="mb-2 text-base ml-3 font-semibold text-white">
                      Welcome Kim!
                    </h5>
                    {profile.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center gap-3 p-1 duration-200 cursor-pointer hover:bg-Neutral-8  rounded"
                      >
                        <Link href="#" className="flex items-center gap-2">
                          <span className="text-white !text-3xl">
                            {data.icon}
                          </span>
                          <p className="text-Neutral-6 text-base leading-[18px]">
                            {data.title}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;
