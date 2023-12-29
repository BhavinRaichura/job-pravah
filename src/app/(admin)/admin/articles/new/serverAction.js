"use server"

const { default: Post } = require("@/models/post")
const { connectToDB } = require("@/utils/db")
import { revalidatePath } from 'next/cache';

export async function createArticle({slug, title, description, tags, content, image}){
    try {
      await connectToDB() 
      // chech is post is already exist
      // -- need to add a validation procedure --
  
      const post = await Post.create({ title, description, tags, content, image})

      revalidatePath('/home')
      revalidatePath('/admin/articles')

      return {success: true,  message: `Post Successfully added to database `, data: { post: post.title}}
    } catch (error) {
      return {success:false, error: error.message, data:{}}
    }
  }