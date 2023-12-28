"use client";
import { useDebounce } from "@uidotdev/usehooks";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchedQuery }) => {
  const searchParams = useSearchParams()
  const router = useRouter();
  const page = Number(searchParams.get("page")) || 1
  const q = searchParams.get("q")
  const [text, setText] = useState( q  || "");
  const [loaded, setLoaded] = useState("")

  const query = useDebounce(text, 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/?q=${text}`);
  };

  useEffect(()=>{
    setLoaded(q);
    setText(q)
  },[q])
  

  useEffect(() => {
    if(loaded && loaded===query){

    }
    else if(!query && page===1)
      router.push('/')
    else
      router.push(`/?q=${query}&page=${page}`);
  }, [query]);

  return (
    <form onSubmit={handleSubmit} className=" bg-gray-50 border  rounded-md">
      <div className=" flex items-center">
        <FaSearch className=" m-3 text-xl text-gray-500" />
        <input className=" bg-gray-50  px-1 py-2 w-full outline-none" type="search" name="search" id="search" onChange={e=>setText(e.target.value)} value={text} placeholder="Search tag or title..."/>
        <button className=" m-2 text-base px-3 py-1 text-white bg-gray-500 hover:bg-gray-950 rounded-md" htmlFor="search" >Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
