import React, { Dispatch, SetStateAction } from "react";

type propsType = {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

const TopBar = ({ showNav, setShowNav }: propsType) => {
  return (
    <div
      className={`bg-Primary-3 left-0 py-5 px-10 z-[5] fixed w-full flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "lg:pl-[280px] md:pl-[280px] pl-[100%]" : ""
      }`}
    >
      <div className="flex items-center md:gap-5 lg:gap-[60px] py-2">
        <span
          className="material-symbols-outlined ml-4 flex lg:hidden cursor-pointer text-white"
          onClick={() => setShowNav(!showNav)}
        >
          menu
        </span>
        <form className="hidden lg:flex items-center border border-Neutral-1 px-4 py-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-Neutral-5 bg-Primary-3"
          />
          <span className="material-symbols-outlined cursor-pointer w-4 h-4 text-Neutral-6 dark:text-myWhite">
            search
          </span>
        </form>
      </div>
      <div className="mr-6">
        <ul className="flex relative text-white gap-5">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
