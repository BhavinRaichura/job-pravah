import Link from "next/link";
import React from "react";


const AsideListElement = ({ data }) => {
  return (
    <Link href={`/?q=${data}`}>
      <li className="hover:text-lime-500 text-gray-500 text-base m-2 font-medium list-none cursor-pointer border-l-4 border-l-gray-100  hover:border-l-lime-600 ">
        <span className=" px-2 font-semibold"> </span>
        {data}
      </li>
    </Link>
  );
};

export default AsideListElement;
