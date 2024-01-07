import { getSearchByTag } from "@/app/(home)/serverAction";
import revalidationPaths from "@/revalidation/paths";
import Link from "next/link";
import React from "react";

export const revalidate = 2

const TagRecentView = async ({ tag }) => {

  const response = await getSearchByTag({tag, page: 1, count:5})

  if (response.status!==200) throw new Error(await response.message);
  const data = response?.data;
  console.log("tag rect view ", data)
  return (
    <div className={` group mt-10     overflow-hidden border-gray-200  transition-all ${response?.data?.posts.length > 0 ? " " : " hidden" }`}>
      <h1 className="px-4 py-2  bg-gray-200  text-base font-semibold text-gray-900   ">
        <span className=" ">
          {tag}
        </span>
      </h1>
      <div className=" p-2 divide-y ">
        {data &&
          data?.posts?.map((post, key) => {
            return (
              <li key={key} className=" p-1 list-none ">
              <Link
                  href={`${revalidationPaths.ARTICLE}/${post.createdAt}/${post.slug}`}
                  className=" text-sm uppercase font-light text-blue-700 hover:underline  hover:translate-x-2 transition-all line-clamp-2"
                  title={post.title}
                  key={key}
                >
                    <span className=" font-bold text-xl">-</span> {post.title}
                    
                </Link>
                </li>
            );
          })}
      </div>
      <p className={`p-2 ${response?.data?.posts.length ===4 ? " " : " hidden" }`}>
        <Link href={`/?q=${tag}`} className=" hover:text-blue-700 text-sm px-2 text-gray-700  font-light  ">SEE MORE...</Link>
      </p>
    </div>
  );
};

export default TagRecentView;
