import { getSuggetion } from "./serverActions";
import Link from "next/link";
import DateFormateElement from "@/components/ui/DateFormateElement";
import Image from "next/image";

export const revalidate = 200;

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
          suggetions?.map((blog, key) => (
            <div
              key={key}
              className=" w-60 h-full 
               overflow-hidden text-sm  max-sm:w-full max-sm:mx-5 "
            >
              <div>
                <Image
                  width={"180"}
                  height={"250"}
                  src={/*blog?.image ? blog?.image :*/ "/job.jpeg"}
                  alt=""
                  className="w-full h-32 rounded-md max-sm:h-40 loading-bg-ani filter bg-cover bg-center"
                />
                <Link
                  href={`/blog/${blog.createdAt}/${blog.slug}`}
                  className="hover:text-black text-gray-700 font-semibold"
                >
                  <p className=" text-gray-600 pt-2 font-medium text-xs">
                    <DateFormateElement date={blog.updatedAt} />
                  </p>
                  <p className=" py-2 text-sm">{blog.title}</p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Suggetions;
