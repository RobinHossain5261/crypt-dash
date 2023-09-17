"use client";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import TopBar from "@/components/TopBar/TopBar";
import "material-symbols";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";
// import Footer from "@/components/Footer/Footer";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function RootLayout({ children }: Props) {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }
    if (innerWidth > 768) {
      setShowNav(true);
    }
    if (innerWidth < 768) {
      setShowNav(false);
    }
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Sidebar showNav={showNav} setShowNav={setShowNav} />
      </Transition>
      <div
        className={`pt-16  transition-all duration-[400ms] ${
          showNav && !isMobile ? "lg:pl-[280px] md:pl-[280px] pl-[100%]" : ""
        }`}
      >
        <div className="mt-10">{children}</div>
        <Footer />
      </div>
    </>
  );
}
