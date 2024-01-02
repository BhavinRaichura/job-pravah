import Post from "@/models/post";
import { connectToDB } from "@/utils/db";

export const getSeachResult = async ({query, page, count}) => {
  
  await connectToDB()
  // Extract search query from request
  const q = query
  // Extract page number from request
  const pageNumber = page
  // Define page size and search text
  const pageSize =  count || 10;
 
  const searchText = new RegExp(q); // Replace with the user's search query

  // Create aggregation pipeline
  const pipeline = [
    {
      $match: {
        $or: [
          { title: { $regex: searchText, $options: "i" } },
          { description: { $regex: searchText, $options: "i" } },
          { tags: {$regex : searchText, $options :"i"} },
        ],
      },
    },
    {
      $sort: { updatedAt: -1 }, // Sort by updatedAt in descending order
    },
    {
      $skip: (pageNumber - 1) * pageSize, // Skip documents based on the page number
    },
    {
      $limit: pageSize, // Limit the number of documents per page
    },
    {
      $project: { title: 1, description: 1, updatedAt: 1, slug: 1, createdAt:1, image:1 },
    },
  ];

  // Execute the aggregation pipeline
  const result = await Post.aggregate(pipeline);

  // Get the total count of matching documents
  const totalCount = await Post.countDocuments({
    $or: [
      { title: { $regex: searchText, $options: "i" } },
      { description: { $regex: searchText, $options: "i" } },
      { tags: { $in: [searchText] } },
    ],
  });
  
  //console.log({ post: result, totalCount, pageNumber });
  return { post: result, totalCount }
}


export async function getSearchByTag({tag, page, count}){
  try {
    await connectToDB()

    const pageNumber = page || 1
    const pageSize = count || 10 //Number(await req.nextUrl.searchParams.get("pagesize")) || 10;
    console.log("fetch tag: ", tag)
    const pipeline = [
      {
          $match: {
            tags: {$regex : tag, $options :"i"}
          }
      },
      {
        $sort: { updatedAt: -1 }, // Sort by updatedAt in descending order
      },
      {
        $skip: (pageNumber - 1) * pageSize, // Skip documents based on the page number
      },
      {
        $limit: pageSize, // Limit the number of documents per page
      },
      {
        $project: { title: 1, slug: 1, createdAt:1 },
      },
    ];

    const result = await Post.aggregate(pipeline);

    const totalCount = await Post.countDocuments({
      tags: {$regex : tag, $options :"i"}
    });
    
    console.log("fetch tag: response: ",{ data: result, totalCount, pageNumber });
    return {status: 200,  data: {length:result.length, posts:result, total:totalCount} }
  } catch (error) {
    return {status: 500, message: error.message}
  }

}