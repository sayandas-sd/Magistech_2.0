import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import image from "../public/Logo.png";


export default function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 mt-20 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={image.src} className="h-10 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Magistech 2.0</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 cursor-pointer">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white underline">Venue</h2>
              <div className="text-white">
                <div className="text-[15px]">
                  Guru Nanak Institute of Technology 157/F,
                </div>
                <div>
                  Nilgunj Rd, Sahid Colony, Panihati,
                </div>
                Kolkata, West Bengal 700114
              </div>
            </div>
            <div className="mx-11">
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white underline">About</h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://google.com" className="hover:underline text-sm">Develop By</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Sayan Das</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; <a href="/" className="hover:underline">Magistech 2.0</a> 2024 Inc. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
