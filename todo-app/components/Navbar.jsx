"use client"; // This is a client component 👈🏽
import { toggleTheme } from "@/utils/theme";
import Link from "next/link";
import React, { useState } from "react";
import { MdWbSunny } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.dark);
  function handleChangeTheme() {
    setIsChecked(!isChecked);
    dispatch(toggleTheme());
  }
  return (
    <nav
      className={
        theme
          ? "shadow-lg flex items-center justify-between flex-wrap p-6"
          : "shadow-lg flex items-center bg-black justify-between flex-wrap p-6 text-amber-500"
      }
    >
      <div className="flex items-center flex-shrink-0 text-black mr-6 lg:mr-72">
        <h1
          className={
            theme
              ? "text-black font-bold text-3xl"
              : "text-amber-500 font-bold text-3xl"
          }
        >
          <Link href={"/"}>Todo App</Link>
        </h1>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            href={"/add-todo"}
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl font-semibold  "
          >
            Add Todo
          </Link>
          <Link
            href={'/card'}
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-xl font-semibold"
          >
            About
          </Link>
        </div>

        <label
          className={
            theme
              ? "flex  mb-2 text-sm font-medium text-gray-900"
              : "flex  mb-2 text-sm font-medium text-amber-500"
          }
        >
          Theme Mode
          <div className="px-2 mt-1">
            {!isChecked ? (
              <MdWbSunny onClick={(e) => handleChangeTheme(e)} />
            ) : (
              <MdNightlight
                onClick={(e) => handleChangeTheme(e)}
              ></MdNightlight>
            )}
          </div>
        </label>
      </div>
    </nav>
  );
}
export default Navbar;
