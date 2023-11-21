import Navbar from "../components/Navbar.jsx";
import "./globals.css";
import "tailwindcss/tailwind.css";
import { useSelector } from "react-redux";
import TopicList from "@/components/TopicList.jsx";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <TopicList></TopicList>
    </>
  );
}
