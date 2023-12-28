"use server";

import Post from "@/models/post";
import { connectToDB } from "@/utils/db";

export async function getAllArticlesSlug() {
  try {
    await connectToDB();
    const slug = await Post.find({}, { slug: 1, createdAt: 1 });
   // console.log(slug);
    return slug;
  } catch (error) {
   // console.log(error);
  }
}

export async function getArticleMetadata(createdAt, slug) {
  try {
    await connectToDB();

    const metadata = await Post.find(
      { slug:slug, createdAt: createdAt  },
      { title: 1, tags: 1, description: 1 }
    );
   // console.log("metadata: ", slug);
    if (!metadata[0]) throw new Error("No article's metadata found");
    return new Response(JSON.stringify(metadata[0]), { status: 200 });
  } catch (error) {
   // console.log(error);
  }
}

export async function getArticle(createdAt, slug) {
  try {
    await connectToDB();
    
    const article = await Post.find(
      { slug: slug, createdAt: createdAt },
      { title: 1, tags: 1, content: 1, updatedAt: 1 }
    );
   //// console.log(article);
    if (!article[0]) throw new Error("No article found");
    return new Response(JSON.stringify(article[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), { status: 200 });
  }
}

export async function getSuggetion(targetPoster) {
  try {
    await connectToDB();
    
    const suggetions = await Post.aggregate([
      {
        $project: {
          title: 1,
          slug: 1,
          updatedAt: 1,
          tags: 1,
          image: 1,
          createdAt:1,
          matchedTags: {
            $size: {
              $setIntersection: ["$tags", targetPoster.tags],
            },
          },
        },
      },
      {
        $match: {
          slug: { $ne: targetPoster.slug }, // Exclude the target poster itself
        },
      },
      {
        $sort: { matchedTags: -1 }, // Sort by the number of matching tags in descending order
      },
      {
        $limit: 4, // Get the top 5 posters
      },
    ]);
    
    return suggetions;
  } catch (e) {
    throw new Error(e);
  }
}
