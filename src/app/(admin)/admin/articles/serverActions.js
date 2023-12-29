"use server"

import Post from "@/models/post"
import revalidationPaths from "@/revalidation/paths";
import revalidationTags from "@/revalidation/tags";
import { connectToDB } from "@/utils/db"
import { revalidatePath, revalidateTag } from "next/cache";

export async function getAllArticles(){
    try{
        await connectToDB()
        const articles =  await Post.find({},{slug:1, createdAt:1, title:1, updatedAt:1});
        return articles;
    } catch (error) {
        console.log(error)
        return {status:500, message: error.message}
    }
}

export async function deleteArticle({createdAt, slug}){
    try{
        await connectToDB();
        const article = await Post.deleteOne({ slug, createdAt });
        if(!article){
            throw new Error("No Article Found")
        } else {

            revalidatePath(revalidationPaths.ADMIN)
            revalidatePath(revalidationPaths.HOME)
            revalidatePath(revalidationPaths.ADMIN_POST)
            revalidatePath(`${revalidationPaths.ARTICLE}/${createdAt}/${slug}`)

            return true;
        }
    } catch(error) {
        throw new Error(error)
    }
}
