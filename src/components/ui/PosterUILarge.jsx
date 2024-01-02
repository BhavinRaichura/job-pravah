
import Image from "next/image";
import Link from "next/link";
import DateFormateElement from "./DateFormateElement";
import { GiDiamonds } from "react-icons/gi";

/*
const PosterUILarge = ({title, description, updatedAt,image, slug,createdAt}) => {
  
  return (
    <div className=" group  rounded-2xl transition-shadow sm:flex  p-2 max-w-5xl max-h-96 my-4  overflow-hidden ">
      <div className=" w-48 max-sm:w-full  sm:flex sm:justify-center ">
        <img
          className=" max-sm:w-full max-sm:h-36 max-sm:px-0.5 w-36   rounded-xl loading-bg-ani "
          src={image || "/job.jpeg"}
          alt=" "
        
        />
      </div>
      <div className=" pl-3 w-full pb-2 ">
        <Link href={`/blog/${createdAt}/${slug}`} className=" ">
          <h2 className="p-1 text-lg font-semibold hover:text-gray-700">
            {" "}
            {title}
          </h2>
        <p className=" p-1  text-xs font-light text-gray-700 group-hover:text-gray-900">
          <b><DateFormateElement date={updatedAt}/></b>
        </p>

        <p className="p-1 text-base font-normal line-clamp-2 ">
          {description}
        </p>
        </Link>
      </div>
    </div>
  );
};
*/
const PosterUILarge = ({title, description, updatedAt,image, slug,createdAt}) => {
  
  return (
    <div className=" group  text-gray-700 rounded-2xl transition-shadow sm:flex  p-2 max-w-5xl  my-4  overflow-hidden  ">
      <div className=" w-48 max-sm:w-full  sm:flex sm:justify-center ">
        <Image
          className=" max-sm:w-full sm:h-40 max-sm:h-44 max-sm:px-0.5 w-36   rounded-xl loading-bg-ani "
          src={ image || "/job.jpeg"}
          width={200}
          height={200}
          alt=" "
          loading="lazy"
        />
      </div>
      <div className=" sm:pl-3 max-sm:p-2 w-full pb-2  " title={description}>
        <Link href={`/blog/${createdAt}/${slug}`} className=" ">
          <h2 className=" py-2 block  text-lg font-semibold leading-snug tracking-normal  group-hover:text-gray-950  antialiased line-clamp-4" >
            {" "}
            {title}
          </h2>
        <p className=" my-2  text-xs font-light  group-hover:text-gray-950">
          <b><DateFormateElement date={updatedAt}/></b>
        </p>

        <p className="  text-sm font-medium text-gray-800 group-hover:text-gray-950   line-clamp-2  ">
          {description}
        </p>
        </Link>
      </div>
    </div>
  );
};

export default PosterUILarge;
