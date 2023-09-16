"use client";

import { Listbox } from "@headlessui/react";
import {
  forwardRef,
  useState,
  Dispatch,
  SetStateAction,
  Fragment,
} from "react";
import Link from "next/link";
import AnimateHeight from "react-animate-height";
import logo from "@/../public/images/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dashIcon from "@/../public/images/dasboard.png";

type propsType = {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

const languages = [
  { id: 1, name: "English (US)", unavailable: false },
  { id: 2, name: "Bangla (BN)", unavailable: false },
  { id: 3, name: "Arbic (SA)", unavailable: false },
];

const Sidebar = forwardRef(({ showNav, setShowNav }: propsType, ref: any) => {
  const currentRoute = usePathname();
  const [selectedPerson, setSelectedPerson] = useState(languages[0]);

  const [activeMenu, setActiveMenu] = useState(0);

  const [height] = useState(0);
  const [height1] = useState(0);

  return (
    <nav
      ref={ref}
      className="fixed top-0 bottom-0 z-[6] w-full md:w-[280px] lg:w-[280px] h-full bg-Primary-3 shadow-sm overflow-y-auto"
    >
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 ml-6 mt-10 mb-10 cursor-pointer"
        >
          <Image className="w-10 h-[42px]" src={logo} alt="company logo" />
          <h1 className="text-white text-2xl font-bold">
            Crypt<span className="text-Primary-2">Dash</span>
          </h1>
        </Link>

        <div className="lg:hidden md:hidden">
          <span
            className=" material-symbols-outlined cursor-pointer text-white  mb-4 mr-4"
            onClick={() => setShowNav(!showNav)}
          >
            close
          </span>
        </div>
      </div>
      <ul className="mx-6">
        <li className="mb-4 cursor-pointer">
          <Link
            href="/dashboard"
            onClick={() => (innerWidth <= 768 ? setShowNav(!showNav) : "")}
            className={`text-Neutral-6 flex gap-2 items-center hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg ${
              currentRoute === "/dashboard" ? "activePath" : ""
            }`}
          >
            <Image src={dashIcon} alt="Dashboard" width={20} height={20} />
            <span className="text-base font-semibold">Dashbord</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer">
          <Link
            href="/exchange"
            onClick={() => (innerWidth <= 768 ? setShowNav(!showNav) : "")}
            className={`text-Neutral-6 flex gap-2 items-center hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg ${
              currentRoute === "/exchange" ? "activePath" : ""
            }`}
          >
            <span className="material-symbols-outlined">sync</span>
            <span className="text-base font-semibold">Exchange</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer">
          <Link
            href="/prices"
            onClick={() => (innerWidth <= 768 ? setShowNav(!showNav) : "")}
            className={`text-Neutral-6 flex gap-2 items-center hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg ${
              currentRoute === "/prices" ? "activePath" : ""
            }`}
          >
            <span className="material-symbols-outlined">payments</span>
            <span className="text-base font-semibold">Prices</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer">
          <Link
            href="/wallets"
            onClick={() => (innerWidth <= 768 ? setShowNav(!showNav) : "")}
            className={`text-Neutral-6 flex gap-2 items-center hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg ${
              currentRoute === "/wallets" ? "activePath" : ""
            }`}
          >
            <span className="material-symbols-outlined">
              account_balance_wallet
            </span>
            <span className="text-base font-semibold">Wallets</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer">
          <Link
            href="/promotions"
            onClick={() => (innerWidth <= 768 ? setShowNav(!showNav) : "")}
            className={`text-Neutral-6 flex gap-2 items-center hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg ${
              currentRoute === "/promotions" ? "activePath" : ""
            }`}
          >
            <span className="material-symbols-outlined">percent</span>
            <span className="text-base font-semibold">Promotions</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer">
          <Link
            href="/activities"
            onClick={() => (innerWidth <= 768 ? setShowNav(!showNav) : "")}
            className={`text-Neutral-6 flex gap-2 items-center hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg ${
              currentRoute === "/activities" ? "activePath" : ""
            }`}
          >
            <span className="material-symbols-outlined">insights</span>
            <span className="text-base font-semibold">Activities</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer">
          <Link
            href="/notifications"
            onClick={() => (innerWidth <= 768 ? setShowNav(!showNav) : "")}
            className={`text-Neutral-6 flex gap-2 items-center hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg ${
              currentRoute === "/notifications" ? "activePath" : ""
            }`}
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="text-base font-semibold">Notifications</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer">
          <Link
            href="/settings"
            onClick={() => (innerWidth <= 768 ? setShowNav(!showNav) : "")}
            className={`text-Neutral-6 flex gap-2 items-center hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg ${
              currentRoute === "/settings" ? "activePath" : ""
            }`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-base font-semibold">Settings</span>
          </Link>
        </li>

        <li className="mb-5 cursor-pointer">
          <div
            className="text-Neutral-6 flex gap-2 items-center justify-between hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg"
            aria-expanded={height !== 0}
            aria-controls="example-panel"
            onClick={() => setActiveMenu((prev) => (prev == 1 ? 0 : 1))}
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-2">
                construction
              </span>
              <span className="text-base font-semibold">Utilities</span>
            </div>
            <span className="material-symbols-outlined w-5 h-5">
              expand_more
            </span>
          </div>
          <AnimateHeight
            id="example-panel"
            duration={500}
            height={activeMenu == 1 ? "auto" : 0}
          >
            <ul>
              <li className="my-2 cursor-pointer">
                <Link
                  href="/utillity/protected"
                  className={`text-Neutral-6 flex hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 ml-4 rounded-lg ${
                    currentRoute === "/utillity/protected" ? "activePath" : ""
                  }`}
                >
                  <span className="text-base font-semibold">
                    Protected Page
                  </span>
                </Link>
              </li>
              <li className="my-2 cursor-pointer">
                <Link
                  href="/utillity/error"
                  className={`text-Neutral-6 flex hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 ml-4 rounded-lg ${
                    currentRoute === "/utillity/error" ? "activePath" : ""
                  }`}
                >
                  <span className="text-base font-semibold">Error Page</span>
                </Link>
              </li>
            </ul>
          </AnimateHeight>
        </li>
        <li className="mb-5 cursor-pointer">
          <div
            className="text-Neutral-6 flex gap-2 items-center justify-between hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 rounded-lg"
            aria-expanded={height1 !== 0}
            aria-controls="example-panel"
            onClick={() => setActiveMenu((prev) => (prev == 7 ? 0 : 7))}
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined w-[15px] h-[15px] mr-3 mb-2">
                work
              </span>
              <span className="text-base font-semibold">Authentication</span>
            </div>
            <span className="material-symbols-outlined w-5 h-5">
              expand_more
            </span>
          </div>
          <AnimateHeight
            id="example-panel"
            duration={500}
            height={activeMenu == 7 ? "auto" : 0}
          >
            <ul>
              <li className="my-2 cursor-pointer">
                <Link
                  href="/utillity/sign_in"
                  className={`text-Neutral-6 flex hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 ml-4 rounded-lg ${
                    currentRoute === "/utillity/sign_in" ? "activePath" : ""
                  }`}
                >
                  <span className="text-base font-semibold">Sign In</span>
                </Link>
              </li>
              <li className="my-2 cursor-pointer">
                <Link
                  href="/utillity/sign_up"
                  className={`text-Neutral-6 flex hover:text-Neutral-8 border border-Neutral-7 hover:border-Neutral-8 px-4 py-3 ml-4 rounded-lg ${
                    currentRoute === "/utillity/sign_up" ? "activePath" : ""
                  }`}
                >
                  <span className="text-base font-semibold">Sign Up</span>
                </Link>
              </li>
              <li
                onClick={() => (innerWidth <= 768 ? setShowNav(!showNav) : "")}
                className={`text-base mx-3 px-4 py-1 mt-1 rounded-full text-myBlack dark:text-myWhite dark:hover:text-myGreen hover:text-myBlue hover:pl-6 transition-all ${
                  currentRoute === "/utillity/signup" ? "activeDropdown" : ""
                }`}
              >
                <Link href="/utillity/signup">Sign up</Link>
              </li>
            </ul>
          </AnimateHeight>
        </li>
      </ul>

      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className="text-white bg-gradient-to-r from-[#33AB71] to-[#06753F] flex gap-2 items-center justify-between pl-4 pr-2 py-3 ml-6 mt-24 rounded">
          {selectedPerson.name}
          <span className="material-symbols-outlined dark:text-myGreen">
            expand_more
          </span>
        </Listbox.Button>
        <Listbox.Options className="mx-6 mt-1 w-36 rounded">
          {languages.map((person) => (
            <Listbox.Option key={person.id} value={person} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`cursor-pointer ${
                    active ? "bg-Neutral-8 text-white" : "bg-white text-black"
                  }`}
                >
                  {selected}
                  {person.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </nav>
  );
});

export default Sidebar;
