import { getSuggetion } from "./serverActions";
import Link from "next/link";
import DateFormateElement from "@/components/ui/DateFormateElement";
import Image from "next/image";
import revalidationPaths from "@/revalidation/paths";


export const revalidate = 3600*24;

const Suggetions = async ({ tags, slug }) => {
  const suggetions = await getSuggetion({ tags, slug });
  //console.log("suggetions: ", suggetions);
  return (
    <div className="my-20">
      <div className="my-8">
        <p className=" text-3xl max-md:text-2xl max-sm:2xl font-semibold text-gray-800 border-b py-2 ">
          Similar Reads
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-stretch">
        {suggetions &&
          suggetions?.data?.map((post, key) => (
            <div
              key={key}
              className=" w-60 h-full 
               overflow-hidden text-sm  max-sm:w-full max-sm:mx-5 "
            >
              <div>
                <Image
                  width={"180"}
                  height={"250"}
                  src={post?.image ? post?.image : "/job.png"}
                  alt=" "
                  className="w-full h-32 rounded-md max-sm:h-40 loading-bg-ani filter bg-cover bg-center"
                />
                <Link
                  href={`${revalidationPaths.ARTICLE}/${post.createdAt}/${post.slug}`}
                  className="hover:text-black text-gray-700 font-semibold"
                >
                  <p className=" text-gray-600 pt-2 font-medium text-xs">
                    <DateFormateElement date={post.updatedAt} />
                  </p>
                  <p className=" py-2 text-base line-clamp-3 h-20">{post.title}</p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Suggetions;
