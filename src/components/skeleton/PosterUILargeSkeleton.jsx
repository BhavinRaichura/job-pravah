import React from "react";

const PosterUILargeSkeleton = () => {
  return (
    <div className=" group  rounded-2xl sm:flex  p-2 max-w-5xl max-h-96 my-4  overflow-hidden bg-gray-50 ">
      <div className=" w-48 max-sm:w-full max-sm:h-36 sm:flex sm:justify-center ">
        <div className=" max-sm:w-full max-sm:h-36 max-sm:px-0.5 w-36   rounded-xl loading-bg-ani "></div>
      </div>
      <div className=" pl-3 max-sm:pl-0 w-full pb-2 ">
        <div className=" my-2 loading-bg-ani h-5 loading-bg-ani w-36 rounded-md"> </div>
        <div className=" my-2 block h-20 loading-bg-ani rounded-md"></div>
        <div className="  block h-10 loading-bg-ani rounded-md"></div>
      </div>
    </div>
  );
};

export default PosterUILargeSkeleton;
