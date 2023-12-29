"use server"

const { default: Post } = require("@/models/post")
const { connectToDB } = require("@/utils/db")
import revalidationTags from '@/revalidation/tags';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function createArticle({slug, title, description, tags, content, image}){
    try {
      await connectToDB() 
      // chech is post is already exist
      // -- need to add a validation procedure --
  
      const post = await Post.create({ title, description, tags, content, image})

      revalidatePath('/home')
      revalidatePath('/admin/articles')
      revalidateTag(revalidationTags.NEW_ARTICLE)


      return {success: true,  message: `Post Successfully added to database `, data: { post: post.title}}
    } catch (error) {
      return {success:false, error: error.message, data:{}}
    }
  }