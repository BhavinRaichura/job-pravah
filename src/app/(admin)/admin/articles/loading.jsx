import React from 'react'

const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-2/3 max-md:w-full p-5 ">
       
        <div className="mx-2 my-32">
          <h1 className="text-5xl font-light text-center my-5">Manage Articles</h1>
          <p className=" text-sm font-light text-center"></p>
        </div>

        <hr className=' bg-gray-200'/>
        
        <div className="p-2  ">
              <div className=" mx-4 my-2 p-5 loading-bg-ani rounded-md " > </div>
              <div className=" mx-4 my-2 p-5 loading-bg-ani rounded-md" > </div>
              <div className=" mx-4 my-2 p-5 loading-bg-ani rounded-md" > </div>
              <div className=" mx-4 my-2 p-5 loading-bg-ani rounded-md " > </div>
              <div className=" mx-4 my-2 p-5 loading-bg-ani rounded-md" > </div>
              <div className=" mx-4 my-2 p-5 loading-bg-ani rounded-md" > </div>
        </div>

      </div>
    </div>
  )
}

export default Loading