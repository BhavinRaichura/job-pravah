"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import buttonStyles from '@/styles/blackButton.module.css'

const Pagine = ({
  currentPage,
  totalPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || "";

  const nextPageHandler = () =>{
    if(totalPage > currentPage )
      router.push(`/?q=${query}&page=${currentPage + 1}`)
  }
  const prevPageHandler = () =>{
    if(currentPage > 1)
    router.push(`/?q=${query}&page=${currentPage - 1}`)
  }
  
  return (
    <div className="my-2">
      <div className="flex gap-2 items-center float-right text-sm font-medium">
        <button
          onClick={prevPageHandler}
          className=" py-2 px-4 rounded-lg text-sm border border-black text-white font-medium bg-black hover:text-black hover:bg-white disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed  disabled:bg-white "
          disabled={currentPage === 1 ? true : false}
        >
          {"<<"} Previous
        </button>
        <span className="  text-gray-400 border-2 p-2 rounded-lg border-gray-400">
          {" "}
          {currentPage}/{totalPage}{" "}
        </span>
        <button
          onClick={nextPageHandler}
          className=" py-2 px-4 rounded-lg text-sm border border-black text-white font-medium bg-black hover:text-black hover:bg-white disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed  disabled:bg-white "
          disabled={currentPage === totalPage ? true : false}
        >
          Next {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagine;
