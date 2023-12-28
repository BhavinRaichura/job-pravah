"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBarTiny = () => {
    const router  = useRouter()
    const [query,setQuery]  = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.length > 0) {
          router.push(`/?q=${query}&page=1`);
        }
      };
    
  return (
    <form onSubmit={handleSubmit} className="ralative mx-auto w-max ">
      <input
        type="search"
        value={query}
        name="search"
        onChange={(e) => setQuery(e.target.value)}
        className="peer cursor-pointer relative z-30 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-gray-300 focus:pl-16 focus:pr-4"
        placeholder="Search Tag, Title..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-300 px-3.5 peer-focus:border-gray-400 peer-focus:stroke-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"

        />
      </svg>
    </form>
  );
};

export default SearchBarTiny;
