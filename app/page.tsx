"use client";

import Image from "next/image";
import Header from "@/components/Header";

import data from "@/data";
import Article from "@/components/Article";

export default function Home() {
  console.log(data);
  return (
    <div className="px-2 overflow-x-hidden">
      <Header />
      <Article />
    </div>
  );
}
