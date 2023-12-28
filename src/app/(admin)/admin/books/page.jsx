import React from "react";
import { getAllBooks } from "./serverAction";

const page = async () => {
  const books = await getAllBooks();
  return (
    <div>
      <h1 className=" text-center font-light text-5xl my-20">Books</h1>
      <div className="flex  mt-6 justify-center">
        <div className=" w-full -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className=" w-full inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-scroll border-b border-gray-200 rounded-md shadow-md">
              <table className="min-w-full w-full overflow-x-scroll divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Author / Exam Board
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Language
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {books?.data?.books?.map((book, key) => {
                    return (
                      <tr
                        key={key}
                        className="transition-all hover:bg-gray-100 hover:shadow-lg"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-800 hover:text-gray-900 capitalize">
                              {book.title}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {book.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            {book.language}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
