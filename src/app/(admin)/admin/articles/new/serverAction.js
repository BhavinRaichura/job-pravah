"use server"

const { default: Post } = require("@/models/post")
const { connectToDB } = require("@/utils/db")
import revalidationPaths from '@/revalidation/paths';
import { revalidatePath } from 'next/cache';

export async function createArticle({slug, title, description, tags, content, image, lastDate, state}){
    try {
      await connectToDB() 
      // chech is post is already exist
      // -- need to add a validation procedure --
  
      const post = await Post.create({ title, description, tags, content, image, lastDate, state})

      revalidatePath(revalidationPaths.ADMIN)
      revalidatePath(revalidationPaths.HOME)
      revalidatePath(revalidationPaths.ADMIN_POST)
      
      return {success: true,  message: `Post Successfully added to database `, data: { title: post.title, slug: post.slug, createdAt: post.createdAt}}
    } catch (error) {
      return {success:false, error: error.message, data:{}}
    }
  }