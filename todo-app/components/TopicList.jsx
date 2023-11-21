"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineAutoDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";
import { useSelector } from "react-redux";
function TopicList() {
  const [todo, setTodos] = useState([{}]);
  const theme = useSelector((store) => store.theme.dark);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("api/topic");
    const data = await res.data;
    setTodos(data.todo);
  };
  const handleDelete = async (e, id) => {
    const res = await axios.delete(`api/topic?id=${id}`);
  };
  if (todo.length === 0) {
    return (
      <>
        <div className={!theme ? "bg-gray-900 h-screen" : ""}></div>
      </>
    );
  }
  return (
    <>
      {todo.map((t) => (
        <div key={t._id} className={theme ? "bg-white" : "bg-gray-900 h-50 "}>
          <div key={t._id}
            className={
              theme
                ? "pt-4 pb-4 flex justify-center items-center"
                : "pt-4 pb-4 flex justify-center items-center "
            }
          >
            <ul key={t._id} className="bg-white rounded-lg shadow divide-y divide-gray-200 w-[900px] border border-slate-300">
              <li key={t._id} className="px-6 py-4">
                <div key={t._id} className="flex justify-between">
                  <span className="font-bold text-lg">{t.title}</span>
                </div>
                <p className="text-gray-700 font-sans font-semibold">
                  {t.description}
                </p>
                <p className="text-gray-700 flex py-4">
                  <MdOutlineAutoDelete
                    className="cursor-pointer font-bold "
                    onClick={(e) => handleDelete(e, t._id)}
                  />
                  <Link href={`/edit/${t._id}`}>
                    <CiEdit className="ml-2 cursor-pointer" />
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopicList;
