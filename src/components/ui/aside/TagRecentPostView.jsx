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
    <div className=" group mt-10 bg-gray-100  p-4 rounded-lg">
      <h1 className=" text-base font-semibold group-hover:text-gray-950 text-gray-700 border-b border-gray-300 p-2">
        {tag}
      </h1>
      <div className=" p-2">
        {data &&
          data?.posts?.map((data, key) => {
            return (
              <li key={key} className=" p-1 m-1 list-none ">
              <Link
                  href={`/blog/${data.createdAt}/${data.slug}`}
                  className=" text-sm  font-semibold text-gray-700 hover:underline hover:text-gray-950 hover:translate-x-2 transition-all line-clamp-2"
                  title={data.title}
                  key={key}
                >
                    <span className=" font-bold text-xl">-</span> {data.title}
                    
                </Link>
                </li>
            );
          })}
      </div>
      <p>
        <Link href={`/?q=${tag}`} className=" px-2 hover:underline text-sm hover:text-gray-950 font-light">See more...</Link>
      </p>
    </div>
  );
};

export default TagRecentView;
