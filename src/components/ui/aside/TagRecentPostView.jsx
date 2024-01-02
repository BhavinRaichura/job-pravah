import { getSearchByTag } from "@/app/(home)/serverAction";
import revalidationTags from "@/revalidation/tags";
import Link from "next/link";
import React from "react";

export const revalidate = 2

const TagRecentView = async ({ tag }) => {

  const response = await getSearchByTag({tag, page: 1, count:5})

  if (response.status!==200) throw new Error(await response.message);
  const data = response?.data;
  console.log("tag rect view ", data)
  return (
    <div className=" group mt-10   rounded-lg border overflow-hidden border-gray-200  hover:shadow-lg transition-all">
      <h1 className=" px-4 bg-gray-100  text-base font-semibold text-gray-800 border-b  py-2">
        {tag}
      </h1>
      <div className=" p-2 ">
        {data &&
          data?.posts?.map((data, key) => {
            return (
              <li key={key} className=" p-1 list-none ">
              <Link
                  href={`/blog/${data.createdAt}/${data.slug}`}
                  className=" text-sm uppercase font-light text-gray-700 hover:underline hover:text-gray-950 hover:translate-x-2 transition-all line-clamp-2"
                  title={data.title}
                  key={key}
                >
                    <span className=" font-bold text-xl">-</span> {data.title}
                    
                </Link>
                </li>
            );
          })}
      </div>
      <p className="p-2">
        <Link href={`/?q=${tag}`} className=" hover:underline text-sm text-gray-700 hover:text-gray-950 font-light underline ">SEE MORE...</Link>
      </p>
    </div>
  );
};

export default TagRecentView;
