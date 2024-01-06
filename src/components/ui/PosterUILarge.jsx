
import Image from "next/image";
import Link from "next/link";
import DateFormateElement from "./DateFormateElement";
import { GiDiamonds } from "react-icons/gi";

const PosterUILarge = ({title, description, updatedAt,image, slug,createdAt}) => {
  
  return (
    <Link href={`/blog/${createdAt}/${slug}`} className=" ">
    <div className=" group border bg-white  hover:shadow-xl  text-gray-700 rounded-2xl transition-shadow sm:flex  p-2 max-w-5xl  my-4  overflow-hidden  ">
      <div className=" overflow-hidden w-48 sm:h-40 max-sm:h-44 max-sm:w-full  sm:flex sm:justify-center ">
        <Image
          className=" max-sm:w-full sm:h-40 max-sm:h-44 max-sm:px-0.5 w-36   rounded-xl loading-bg-ani "
          src={ image || "/job.jpeg"}
          width={200}
          height={200}
          alt=" "
          loading="lazy"
        />
      </div>
      <div className=" sm:pl-3 max-sm:p-2 w-full pb-2 pr-2  " title={description}>
          <h2 className=" py-1 block capitalize  text-lg font-bold leading-snug tracking-normal  group-hover:text-gray-950  antialiased line-clamp-4" >
            {" "}
            {title}
          </h2>
        <p className=" my-1  text-sm font-extralight text-gray-500  group-hover:text-gray-700">
          <b><DateFormateElement date={updatedAt}/></b>
        </p>

        <p className="  text-base font-extralight text-gray-700 group-hover:text-gray-950   line-clamp-2  ">
          {description}
        </p>
      </div>
    </div>
        </Link>
  );
};

export default PosterUILarge;
