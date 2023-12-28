import PosterEditButtons from "@/components/ui/adminDashboard/PosterEditButtons";
import { deleteArticle, getAllArticles } from "./serverActions";

import DateFormateElement from "@/components/ui/DateFormateElement";

const PostsTable = async () => {
    const artices = await getAllArticles();

  const handleDelete = async ({ createdAt, slug }) => {
    "use server";
    const response = await deleteArticle({ createdAt, slug });

    if (!response) {
      return false;
    } else {
      return true;
    }
  };
  return (
   
      <div className="flex  mt-6 justify-center">
        <div className="w-full -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="w-full inline-block min-w-max py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-scroll border-b border-gray-200 rounded-md shadow-md">
              <table className=" w-full overflow-x-scroll divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      <div className="ml-4">

                      Title
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Created At
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Updated At
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {artices.map((article, key) => {
                    return (
                      <tr key={key} className="transition-all hover:bg-gray-100 hover:shadow-lg">
                        <td className="px-6 py-4 whitespace-nowrap" title={article.title}>
                          <div className="flex items-center">
                            
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-800 hover:text-gray-900 max-w-xs overflow-hidden line-clamp-1">
                                {article.title}
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            {article.createdAt}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          
                          <DateFormateElement date={article.updatedAt} />
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          
                            <PosterEditButtons deletePostsHandler={deleteArticle} slug={article.slug} createdAt={article.createdAt}/>
                          
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
   
  )
}

export default PostsTable