"use server"

const { default: Books } = require("@/models/books")
const { default: Post } = require("@/models/post")
const { default: User } = require("@/models/user")
const { connectToDB } = require("@/utils/db")

export async function getCountUsers(){
    try {
        await connectToDB()
        const countUser = await User.countDocuments({})
        return {status:200, data: { count:countUser } } 
    } catch (error) {
        console.log(error);
        return{ status:500 ,data:{}, message:error.message};
    }
} 

export async function getCountPosts(){
    try {
        await connectToDB()
        const countPost =await Post.countDocuments({})
        return {status:200, data: { count:countPost } } 
    } catch (error) {
        console.log(error);
        return{ status:500 ,data:{}, message:error.message};
    }
} 

export async function getCountBooks(){
    try {
        await connectToDB()
        const countBooks = await Books.countDocuments({})
        return {status:200, data: { count:countBooks } } 
    } catch (error) {
        console.log(error);
        return{ status:500 ,data:{}, message:error.message};
    }
} 