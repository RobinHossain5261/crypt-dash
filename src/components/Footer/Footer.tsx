import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-Primary-bg px-2 lg:px-6 pb-6 text-center ">
      <hr className="mb-3 lg:mb-6 border-Neutral-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center ">
        <p className="lg:text-start text-sm md:text-lg text-white order-last lg:order-first ">
          Copyright © 2023. All Rights Reserved By
          <Link href="#" className="text-Neutral-8 ml-[6px]">
            CryptDash
          </Link>
        </p>
        <ul className="flex flex-wrap justify-around lg:gap-8 text-lg mt-1  ">
          <li>
            <Link className="text-sm md:text-lg  text-white" href="#">
              Help Center
            </Link>
          </li>
          <li>
            <Link className="text-sm md:text-lg  text-white" href="#">
              Privacy
            </Link>
          </li>
          <li>
            <Link className="text-sm md:text-lg text-white" href="#">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
