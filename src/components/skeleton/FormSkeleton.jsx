import React from "react";

const FormSkeleton = ({formName}) => {
  return (
    <div className=" p-2  flex justify-center ">
      <div className="w-2/3 max-md:w-full">
        <div className="flex flex-col justify-center items-center my-24">
          {formName ?  (
              <h1 className="text-5xl font-light text-center my-5">
                {formName}
              </h1>
            ) : (
              <div className=" m-2 w-52 h-20 rounded-md loading-bg-ani"></div>
            )}
          <div className=" m-2 w-56 h-5 rounded-md loading-bg-ani"></div>
        </div>
        <div className="m-2  h-24 loading-bg-ani rounded-md"> </div>
        <div className="m-2  h-24 loading-bg-ani rounded-md"> </div>
        <div className="m-2  h-10 loading-bg-ani rounded-md"> </div>
        <div className="m-2  h-10 loading-bg-ani rounded-md"> </div>
        <div className="  flex flex-wrap  justify-start ">
          <div className="m-2 w-20  h-6 loading-bg-ani rounded-md"> </div>
          <div className="m-2 w-20  h-6 loading-bg-ani rounded-md"> </div>
        </div>
        <div className="m-2  h-72 loading-bg-ani rounded-md"> </div>
        <div className="m-2  h-5 loading-bg-ani rounded-md"> </div>
        <div className="m-2 w-28 h-10 loading-bg-ani rounded-md"> </div>
      </div>
    </div>
  );
};

export default FormSkeleton;
