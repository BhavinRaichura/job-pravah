import Post from "@/models/post";
import { connectToDB } from "@/utils/db";

// import required module
export async function POST(request) {
  // parse json from request
  const { title, content, description, tags, image } = await request.json();

  try {
    // connect to db
    await connectToDB();

    // create new post
    const post = new Post({ title, content, description, tags, image });

    // save post to db
    await post.save();

    // return success response with post
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    // return error response
    return new Response("something went wrong", { status: 500 });
  }
}


export async function GET(req) {
  try {
    await connectToDB()
    // Extract search query from request
    const q = (await req.nextUrl.searchParams.get("q")) || "";
    // Extract page number from request
    const pageNumber = (await req.nextUrl.searchParams.get("page")) || 1;
    // Define page size and search text
    const pageSize = Number(await req.nextUrl.searchParams.get("pagesize")) || 10;
  // console.log("page size", pageSize)

    const searchText = new RegExp(q); // Replace with the user's search query

    // Create aggregation pipeline
    const pipeline = [
      {
        $match: { },
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
        $project: { title: 1, description: 1, updatedAt: 1, slug: 1, createdAt:1 },
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
  // console.log("\n\n###################################\n\n\n")
  // console.log({ post: result, totalCount, pageNumber });

    // Return the result along with the total count
    return new Response(JSON.stringify({ post: result, totalCount }), {
      status: 200,
    });
  } catch (e) {
    // Return an error response if the request fails
    return new Response(JSON.stringify({ message: e.message }), {
      status: 200,
    });
  }
}
