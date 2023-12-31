
import Editor from "@/components/ui/adminDashboard/Editor";
import Post from "@/models/post";
import revalidationPaths from "@/revalidation/paths";
import { connectToDB } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

import React from "react";

export const metadata = {
  title : "Edit" 
}


async function getArticleEditableData({ slug, createdAt }) {
  "use server";
  try {
    await connectToDB();
    const article = await Post.findOne(
      { slug: slug, createdAt: createdAt },
      { title: 1, tags: 1, description: 1, content: 1, image: 1, lastDate:1, state:1 }
    );
      if(!article) return {success:false, error: "post not found", data:{}}

    return {success:true,  data:article};
  } catch (e) {
    //throw new Error("anable to find slug or connect to database");
    return {success:false, error: "post not found", data:{}}
  }
}

async function updateArticle({
  slug,
  title,
  description,
  tags,
  content,
  image,
  createdAt,
  lastDate,
  state
}) {
  "use server";
  try {
    await connectToDB();
    const post = await Post.findOneAndUpdate(
      { slug: slug, createdAt: createdAt },
      {
        $set: {
          title: title,
          tags: tags,
          description: description,
          content: content,
          image: image,
          updatedAt: new Date(),
          lastDate: lastDate,
          state:state
        },
      }
    );
    if(!post){
      return {success:false, error: "post not found", data:{}}
    }
    revalidatePath(`${revalidationPaths.ARTICLE}/${createdAt}/${slug}`)
    return {success:true, message:"submited successfully", data:{ title: post.title, slug: post.slug, createdAt: post.createdAt}}
  } catch (e) {
    return {success:false, error: error.message, data:{}}
  }
}

const page = async ({ params }) => {
  console.log("edit ",params)
  
  const res = await getArticleEditableData({ createdAt: params.slugs[0] ,slug: params.slugs[1] });
  if(!res.success)  notFound()
  
  const { title, description, tags, content, image, lastDate, state } = res.data;

  return (
    <div>
      <Editor
        formName={"Update Article"}
        title={title}
        description={description}
        tags={tags}
        content={content}
        image={image}
        lastDate={lastDate}
        state= {state}
        slug={params.slugs[1]}
        createdAt = {params.slugs[0]}
        formSubmitHandler={updateArticle}
      />
    </div>
  );
};

export default page;
