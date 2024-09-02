"use client";

import { useState } from "react";
import logo from "../public/Logo.png";
import Link from "next/link";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const toggle = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="w-full h-[65px] fixed top-0 z-50 px-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-[10px]">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo.src}
            className="h-16"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          onClick={toggle}
          type="button"
          className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isClick ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isClick ? (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isClick ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
  className="font-medium flex flex-col p-4 md:px-10 md:py-4 mt-4 md:gap-7 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-[#7042f861] md:border-2 md:rounded-xl border border-[#7042f861] bg-[#0300145e] md:">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/event"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScyMcEFcT7tbpK6K9vMdo7ZD65B_CpX5wlSH8sVj8AQBkID8w/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Brochure
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
