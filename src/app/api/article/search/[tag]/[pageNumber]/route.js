import Post from "@/models/post";
import { connectToDB } from "@/utils/db";

export async function GET(req,{params}) {
    try {
      await connectToDB()

      const tag = await params.tag;
      const pageNumber = await params.pageNumber;
      const pageSize = 10 //Number(await req.nextUrl.searchParams.get("pagesize")) || 10;
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
  
      return new Response(JSON.stringify({ posts: result, totalCount }), {
        status: 200,
      });
    } catch (e) {
      // Return an error response if the request fails
      console.log(e)
      return new Response(JSON.stringify({ message: e.message }), {
        status: 200,
      });
    }
  }
  