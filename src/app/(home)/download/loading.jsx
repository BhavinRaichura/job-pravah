import Heading from "@/components/ui/Heading";
import React from "react";

const loading = () => {
  return (
    
    <div className="p-5">
      <Heading heading={"Download"} />
      <div className="">
        <div className="m-5 mt-5 border-b ">
          <p className=" w-4/5 h-10 my-2 mx-1 rounded-md loading-bg-ani"> </p>
          <p className="m-1 w-3/5 h-7 rounded-md loading-bg-ani"></p>
          <p className=" m-1 w-full h-7 rounded-md loading-bg-ani"></p>
          <div className="my-2 mx-1  w-full h-8  rounded-full loading-bg-ani"></div>
        </div>
        <div className="m-5 mt-5 border-b ">
          <p className=" w-4/5 h-10 my-2 mx-1 rounded-md loading-bg-ani"> </p>
          <p className="m-1 w-3/5 h-7 rounded-md loading-bg-ani"></p>
          <p className=" m-1 w-full h-7 rounded-md loading-bg-ani"></p>
          <div className="my-2 mx-1  w-full h-8  rounded-full loading-bg-ani"></div>
        </div>
        <div className="m-5 mt-5 border-b ">
          <p className=" w-4/5 h-10 my-2 mx-1 rounded-md loading-bg-ani"> </p>
          <p className="m-1 w-3/5 h-7 rounded-md loading-bg-ani"></p>
          <p className=" m-1 w-full h-7 rounded-md loading-bg-ani"></p>
          <div className="my-2 mx-1  w-full h-8  rounded-full loading-bg-ani"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
