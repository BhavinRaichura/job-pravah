import React from "react";
import Link from "next/link";

const TagRenderer = ({ tag }) => {
  return (
    <Link href={`/?q=${tag}&page=1`}>
      <span className="py-1 px-2   bg-gray-200  text-gray-8 text-sm font-normal border rounded-full hover:bg-white hover:text-gray-800 hover:border-gray-800">
        #{tag}
      </span>
    </Link>
  );
};

export default TagRenderer;
