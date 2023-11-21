"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { useSelector } from "react-redux";
function Card() {
  const theme = useSelector((store) => store.theme.dark);

  return (
    <>
      <Navbar></Navbar>
      <div className={theme?"flex items-center justify-center":"flex items-center justify-center bg-gray-900 h-[89vh]"}>
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
          <p className={theme?" text-gray-500 dark:text-gray-400 font-extrabold":" dark:text-gray-400 font-extrabold text-amber-500 "}>
            Todo app using Next.js, a React framework that facilitates the
            development of server-rendered React applications. This app is
            designed to empower users with the ability to manage their tasks
            dynamically, offering features such as adding, deleting, editing,
            and updating todo items.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
