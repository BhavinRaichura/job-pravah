"use server";

import Post from "@/models/post";
import { connectToDB } from "@/utils/db";

export async function getAllArticlesSlug() {
  try {
    await connectToDB();
    const slug = await Post.find({}, { slug: 1, createdAt: 1, updatedAt: 1 });
   // console.log(slug);
    return { success:true, data:slug};
  } catch (error) {
    console.log(error);
    return {success:false, error: error.message, data:{}};
  }
}

export async function getArticleMetadata(createdAt, slug) {
  try {
    await connectToDB();

    const metadata = await Post.find(
      { slug:slug, createdAt: createdAt  },
      { title: 1, tags: 1, description: 1, image:1 }
    );
   // console.log("metadata: ", slug);
    if (!metadata[0]) throw new Error("No article's metadata found");
    metadata.image = metadata.image || ""

    return {success: true, data: metadata[0]}
  } catch (error) {
    console.log(error);
    return {success: false, error: error.message, data:[] }
  }
}

export async function getArticle(createdAt, slug) {
  try {
    await connectToDB();
    
    const article = await Post.find(
      { slug: slug, createdAt: createdAt },
      { title: 1, tags: 1, content: 1, updatedAt: 1 }
    );
   
    if (!article[0]) throw new Error("No article found");
    return {success: true, data: article[0]}
  } catch (error) {
    return {success: false, error:error.message, data: {}}
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
    
    return { success: true, name:"suggestion", data: suggetions};
  } catch (e) {
    throw { success: false, error:e.message, data: {}};
    
  }
}
