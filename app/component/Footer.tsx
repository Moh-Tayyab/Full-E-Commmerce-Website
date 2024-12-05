import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-Text bg-Text2 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left lg:w-1/4 md:w-1/2 px-4 items-center sm:text-center justify-center">
          <Link
            href={"#"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-[24px] 3% font-inter font-bold w-[118px] h-[24px]">
              Exclusive
            </span>
          </Link>
          <p className="ml-3 font-poppins font-medium text-lg pt-4 pb-4 w-[101px] h-[28px]">
            Subscribe
          </p>
          <p className="pt-8 text-[16px] font-[400] font-poppins ml-3 w-[206px] h-[24px]">
            Get 10% off your first order
          </p>
          <div className="pt-10 ml-3">
            <button className="rounded-[4px] border border-primary p-1 flex">
              <input
                type="text"
                className="w-full p-2 text-sm text-gray-600 placeholder-gray-400 bg-gray
            focus:outline-none focus:underline transition duration-200 ease-in-out bg-Button"
                placeholder="Enter your email . . ."
              />
              <MdDoubleArrow className="items-center justify-center w-9 h-9" />
            </button>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 items-center sm:text-center justify-center ">
            <h2 className="title-font font-medium text-white tracking-widest text-[20px] mb-3 w-[81px] h-[28px]">
              Support
            </h2>
            <nav className="list-none mb-10">
              <li>
                <p className=" hover:text-white w-[175px] h-[48px] ">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </p>
              </li>
              <li>
                <p className=" hover:text-white w-[175px] h-[48px] mt-4">
                  exclusive@gmail.com
                </p>
              </li>
              <li>
                <p className=" hover:text-white w-[165px] h-[28px] ">
                  +88015-88888-9999
                </p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 items-center sm:text-center justify-center">
            <h2 className="title-font font-medium text-white tracking-widest text-[20px] mb-3 h-[28px] w-[85px]">
              Account
            </h2>
            <nav className="list-none mb-10">
              <li>
                <p className=" hover:text-white w-[94px] h-[24px] mb-3">
                  My Account
                </p>
              </li>
              <li>
                <p className=" hover:text-white  w-[123px] h-[24px] mb-3">
                  Login / Register
                </p>
              </li>
              <li>
                <p className=" hover:text-white w-[35px] h-[24px] mb-3">Cart</p>
              </li>
              <li>
                <p className=" hover:text-white w-[61px] h-[24px] mb-3">
                  Wishlist
                </p>
              </li>
              <li>
                <p className=" hover:text-white h-[24px] w-[41px]">Shop</p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 items-center sm:text-center justify-center">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              Quick Link
            </h2>
            <nav className="list-none mb-10">
              <li>
                <p className=" hover:text-white py-2">Privacy Policy</p>
              </li>
              <li>
                <p className=" hover:text-white py-2">Terms Of Use</p>
              </li>
              <li>
                <p className=" hover:text-white py-2">FAQ</p>
              </li>
              <li>
                <p className=" hover:text-white py-2">Contact</p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">
              Download App
            </h2>
            <nav className="list-none mb-10">
              <li>
                <p className=" hover:text-white font-poppins text-[13px] py-2">
                  Save $3 with App New User Only
                </p>
              </li>
              <li>
                <div className="flex flex-row items-center gap-3">
                  {/* QR Code */}
                  <Image
                    src="/Qrcode1.png"
                    alt="QR Code"
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px]"
                  />

                  {/* Buttons Container */}
                  <div className="flex flex-col items-center gap-3">
                    {/* Google Play Button */}
                    <button className="bg-Text2 w-[134px] h-[56px] flex flex-row justify-center items-center text-white rounded-lg border border-Text hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 0 512 512">
                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                      </svg>
                      <span className="ml-2 flex items-start flex-col leading-none">
                        <span className="text-xs text-gray-600 mb-1">
                          GET IT ON
                        </span>
                        <span className="title-font font-medium">
                          Google Play
                        </span>
                      </span>
                    </button>

                    {/* App Store Button */}
                    <button className="bg-Text2 w-[134px] h-[56px] flex flex-row justify-center items-center text-white rounded-lg border border-Text hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5 h-5"
                        viewBox="0 0 305 305">
                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
                      </svg>
                      <span className="ml-1 flex items-start flex-col leading-none">
                        <span className="text-xs text-gray-600 mb-1">
                          Download on the
                        </span>
                        <span className="title-font font-medium">
                          App Store
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </li>

              <li>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start pt-4">
                  <a className="">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-3 ">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-3 ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-3 ">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      />
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </a>
                </span>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-Text2 bg-opacity-75 border border-Text">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
          <p className=" text-[16px] text-center sm:text-left text-primary font-poppins font-normal ">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
