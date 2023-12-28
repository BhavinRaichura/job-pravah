import React from 'react'

const ArticleSkeleton = () => {
  return (
    <div className="p-10 max-md:p-5">
      <div className=" mb-20 max-h-full">
        <h1 className=" py-10 loading-bg-ani h-36 rounded-md"> </h1>
        <p className=" loading-bg-ani w-36 h-7 my-16 rounded-md"> </p>
      </div>

      <div>
        <div className="loading-bg-ani my-4 h-40 rounded-md"></div>
        <div className="loading-bg-ani my-4 h-40 rounded-md"></div>
        <div className="loading-bg-ani my-4 h-40 rounded-md"></div>
      </div>

      <div className="py-2 flex flex-wrap">
        <span className="w-16 h-7 m-1 rounded-sm loading-bg-ani"> </span>
        <span className="w-16 h-7 m-1 rounded-sm loading-bg-ani"> </span>
        <span className="w-16 h-7 m-1 rounded-sm loading-bg-ani"> </span>
      </div>
    </div>
  )
}

export default ArticleSkeleton