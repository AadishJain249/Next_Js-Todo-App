"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";
function AddTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();
  const theme = useSelector((store) => store.theme.dark);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  function handleSubmit(e)
  {
    e.preventDefault()
    addData().then()
  }
  async function addData() {
    try {
      const res = await axios.post("api/topic", {
        title: title,
        description: desc,
      },config);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className={theme ? "bg-white" : "bg-gray-900 h-screen"}>
        <Navbar></Navbar>
        <div
          className={
            theme
              ? "max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10 border border-slate-400 rounded-lg shadow-lg"
              : "max-w-2xl bg-black py-10 px-5 m-auto w-full mt-10 rounded-lg shadow-lg"
          }
        >
          <div className="text-3xl mb-6 text-center "></div>

          <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
            <div className="col-span-2 lg:col-span-2">
              <h1
                className={
                  theme
                    ? " font-bold text-3xl"
                    : "font-bold text-3xl text-amber-500"
                }
              >
                Add Your Todo Here
              </h1>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded-lg mt-4 border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Title"
                />
                <input
                  type="text"
                  onChange={(e) => setDesc(e.target.value)}
                  className=" rounded-lg shadow-lg mt-4 border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Description"
                />
                <button
                  type="submit"
                  className=" mt-4 shadow-lg rounded-lg py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
