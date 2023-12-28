import NotFound from "@/app/not-found";
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
      { title: 1, tags: 1, description: 1, content: 1, image: 1 }
    );
    //revalidatePath(`${revalidationPaths.ARTICLE}/${slug}`)
    return article;
  } catch (e) {
    throw new Error("anable to find slug or connect to database");
  }
}

async function updateArticle({
  slug,
  title,
  description,
  tags,
  content,
  image,
  createdAt
}) {
  "use server";
  try {
    await connectToDB();
    const article = await Post.findOneAndUpdate(
      { slug: slug, createdAt: createdAt },
      {
        $set: {
          title: title,
          tags: tags,
          description: description,
          content: content,
          image: image,
          updatedAt: new Date()
        },
      }
    );
    revalidatePath(`/blog/${createdAt}/${slug}`)
    return {flag : article ? true: false, article:article};
  } catch (e) {
    throw new Error("anable to find slug or connect to database");
  }
}

const page = async ({ params }) => {
  console.log("edit ",params)
  
  const res = await getArticleEditableData({ createdAt: params.slugs[0] ,slug: params.slugs[1] });
  
  const { title, description, tags, content, image } = res;

  return (
    <div>
      <Editor
        formName={"Update Article"}
        title={title}
        description={description}
        tags={tags}
        content={content}
        image={image}
        slug={params.slugs[1]}
        createdAt = {params.slugs[0]}
        formSubmitHandler={updateArticle}
      />
    </div>
  );
};

export default page;
